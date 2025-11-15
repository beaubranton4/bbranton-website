#!/usr/bin/env python3
"""
Automation tool that turns an audio or video recording into a journal entry.

Workflow:
1. Transcribe the supplied media with OpenAI Whisper.
2. Clean up the transcript with an LLM using Beau's preferred prompt.
3. Copy the media into the appropriate public directory.
4. Create a Markdown post with frontmatter and embedded media.
5. Optionally commit (and push) the changes.
"""

from __future__ import annotations

import argparse
import datetime as dt
import mimetypes
import os
import re
import shutil
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Sequence

from dotenv import load_dotenv
from openai import OpenAI


ROOT = Path(__file__).resolve().parents[1]
CONTENT_DIR = ROOT / "content" / "posts"
AUDIO_DIR = ROOT / "public" / "audio"
VIDEO_DIR = ROOT / "public" / "videos"

AUDIO_EXTENSIONS = {".mp3", ".m4a", ".wav", ".aac", ".flac", ".ogg", ".mpga"}
VIDEO_EXTENSIONS = {".mp4", ".mov", ".mkv", ".webm", ".m4v"}

CLEANUP_PROMPT = (
    "Please help me write a journal entry. Try to keep my words exactly as they are "
    "with the same structure and organization and same message. Just clean up the "
    "grammar spelling mistakes and small little small things to make it flow better "
    "and sound like a more coherent and intelligent journal entry."
)


@dataclass
class GenerationResult:
    markdown_path: Path
    media_path: Path
    title: str
    date: str


def load_env() -> None:
    """Load environment variables from `.env.local` if present."""
    dotenv_path = ROOT / ".env.local"
    if dotenv_path.exists():
        load_dotenv(dotenv_path)


def ensure_api_key() -> None:
    if not os.getenv("OPENAI_API_KEY"):
        sys.exit(
            "OPENAI_API_KEY is not set. Add it to your environment or `.env.local`."
        )


def is_audio(path: Path) -> bool:
    return path.suffix.lower() in AUDIO_EXTENSIONS


def is_video(path: Path) -> bool:
    return path.suffix.lower() in VIDEO_EXTENSIONS


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"[\s_-]+", "-", value)
    return value.strip("-") or "journal-entry"


def default_title(entry_date: dt.date) -> str:
    return entry_date.strftime("%B %-d, %Y")


def generate_excerpt(text: str, max_length: int = 180) -> str:
    cleaned = " ".join(text.strip().split())
    if len(cleaned) <= max_length:
        return cleaned
    cut = cleaned[: max_length + 1].rsplit(" ", 1)[0]
    return cut.rstrip(",.;:") + "…"


def copy_media(src: Path, dest_dir: Path, new_name: str) -> Path:
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest_path = dest_dir / new_name
    shutil.copy2(src, dest_path)
    return dest_path


def transcribe(client: OpenAI, media_path: Path, model: str) -> str:
    with media_path.open("rb") as media_file:
        transcription = client.audio.transcriptions.create(
            model=model,
            file=media_file,
        )
    return transcription.text


def polish_transcript(client: OpenAI, transcript: str, model: str) -> str:
    response = client.responses.create(
        model=model,
        input=[
            {"role": "system", "content": CLEANUP_PROMPT},
            {"role": "user", "content": transcript},
        ],
    )
    return response.output_text


def build_frontmatter(
    *, title: str, date_str: str, excerpt: str, featured: bool
) -> str:
    lines = [
        "---",
        f"title: '{title}'",
        f"date: '{date_str}'",
        f"excerpt: '{excerpt}'",
    ]
    if featured:
        lines.append("featured: true")
    lines.append("---")
    return "\n".join(lines)


def media_embed(media_rel_path: str, mime_type: str, is_audio_file: bool) -> str:
    if is_audio_file:
        source_type = mime_type or "audio/mp4"
        return (
            '<audio controls style="width: 100%; margin: 2rem 0; border-radius: 0.5rem;">\n'
            f'  <source src="{media_rel_path}" type="{source_type}" />\n'
            "  Your browser does not support the audio tag.\n"
            "</audio>"
        )
    return (
        f'<video controls src="{media_rel_path}" width="100%" '
        'style="max-width: 720px; margin: 1.5rem 0;"></video>'
    )


def write_markdown_post(
    *,
    path: Path,
    frontmatter: str,
    body: str,
    media_embed_html: str,
) -> None:
    content = "\n\n".join([frontmatter, body.strip(), media_embed_html, ""])
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def git_commit(paths: Sequence[Path], message: str, push: bool = False) -> None:
    str_paths = [str(p.relative_to(ROOT)) for p in paths]
    subprocess.run(
        ["git", "add", *str_paths],
        cwd=ROOT,
        check=True,
    )
    subprocess.run(
        ["git", "commit", "-m", message],
        cwd=ROOT,
        check=True,
    )
    if push:
        subprocess.run(
            ["git", "push"],
            cwd=ROOT,
            check=True,
        )


def create_entry(
    *,
    media_input: Path,
    entry_date: dt.date,
    title: Optional[str],
    excerpt: Optional[str],
    featured: bool,
    transcription_model: str,
    response_model: str,
    dry_run: bool,
    commit: bool,
    push: bool,
) -> GenerationResult:
    if not media_input.exists():
        sys.exit(f"Media file not found: {media_input}")

    media_type = None
    if is_audio(media_input):
        media_type = "audio"
        dest_dir = AUDIO_DIR
    elif is_video(media_input):
        media_type = "video"
        dest_dir = VIDEO_DIR
    else:
        sys.exit("Unsupported media type. Provide an audio or video file.")

    client = OpenAI()

    transcript_text = transcribe(client, media_input, transcription_model)
    polished_text = polish_transcript(client, transcript_text, response_model)

    resolved_title = title or default_title(entry_date)
    slug = slugify(resolved_title)
    media_ext = media_input.suffix.lower()
    media_filename = f"{entry_date.isoformat()}-{slug}{media_ext}"
    dest_media_path = copy_media(media_input, dest_dir, media_filename)

    if media_type == "audio":
        media_rel_path = f"/audio/{dest_media_path.name}"
    else:
        media_rel_path = f"/videos/{dest_media_path.name}"

    mime_type, _ = mimetypes.guess_type(dest_media_path.name)
    embed_html = media_embed(media_rel_path, mime_type, media_type == "audio")

    cleaned_title = resolved_title.strip()
    cleaned_excerpt = excerpt or generate_excerpt(polished_text)
    date_str = entry_date.isoformat()
    frontmatter = build_frontmatter(
        title=cleaned_title,
        date_str=date_str,
        excerpt=cleaned_excerpt,
        featured=featured,
    )

    markdown_filename = f"{date_str}-{slug}.md"
    markdown_path = CONTENT_DIR / markdown_filename

    if dry_run:
        print("Dry run enabled. Generated content preview:\n")
        print(frontmatter)
        print()
        print(polished_text.strip())
        print()
        print(embed_html)
    else:
        write_markdown_post(
            path=markdown_path,
            frontmatter=frontmatter,
            body=polished_text,
            media_embed_html=embed_html,
        )

        if commit:
            message = f"Add {date_str} journal entry"
            git_commit([markdown_path, dest_media_path], message, push=push)

        print(f"Markdown written to: {markdown_path.relative_to(ROOT)}")
        print(f"Media copied to: {dest_media_path.relative_to(ROOT)}")

    return GenerationResult(
        markdown_path=markdown_path,
        media_path=dest_media_path,
        title=cleaned_title,
        date=date_str,
    )


def parse_args(argv: Optional[Sequence[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Transcribe an audio or video journal entry and create a post."
    )
    parser.add_argument("media", type=Path, help="Path to the audio or video file.")
    parser.add_argument(
        "--date",
        type=str,
        help="Date for the post in YYYY-MM-DD format (defaults to today).",
    )
    parser.add_argument("--title", type=str, help="Optional post title.")
    parser.add_argument("--excerpt", type=str, help="Optional custom excerpt.")
    featured_group = parser.add_mutually_exclusive_group()
    featured_group.add_argument(
        "--featured",
        dest="featured",
        action="store_true",
        help="Mark the post as featured (default).",
    )
    featured_group.add_argument(
        "--no-featured",
        dest="featured",
        action="store_false",
        help="Do not mark the post as featured.",
    )
    parser.set_defaults(featured=True)
    parser.add_argument(
        "--transcription-model",
        default="whisper-1",
        help="OpenAI model for transcription (default: whisper-1).",
    )
    parser.add_argument(
        "--response-model",
        default="gpt-4o-mini",
        help="OpenAI model for polishing the transcript (default: gpt-4o-mini).",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the generated content without writing files.",
    )
    parser.add_argument(
        "--commit",
        action="store_true",
        help="Commit the generated files after creation.",
    )
    parser.add_argument(
        "--push",
        action="store_true",
        help="Push committed changes (implies --commit).",
    )
    return parser.parse_args(argv)


def main(argv: Optional[Sequence[str]] = None) -> None:
    args = parse_args(argv)
    load_env()
    ensure_api_key()

    try:
        entry_date = (
            dt.datetime.strptime(args.date, "%Y-%m-%d").date()
            if args.date
            else dt.date.today()
        )
    except ValueError as exc:
        sys.exit(f"Invalid date value: {exc}")

    if args.push:
        args.commit = True

    create_entry(
        media_input=args.media,
        entry_date=entry_date,
        title=args.title,
        excerpt=args.excerpt,
        featured=args.featured,
        transcription_model=args.transcription_model,
        response_model=args.response_model,
        dry_run=args.dry_run,
        commit=args.commit,
        push=args.push,
    )


if __name__ == "__main__":
    main()



