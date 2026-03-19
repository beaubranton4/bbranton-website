#!/usr/bin/env python3
"""
Import Apple Notes text exports into journal posts.

Expected workflow:
1. Save/share Apple Notes text files into content/journal-inbox/.
2. Run this script to convert the latest inbox file into content/posts/.
3. Script archives the source file after a successful import.
"""

from __future__ import annotations

import argparse
import datetime as dt
import re
import shutil
import sys
from pathlib import Path
from typing import Iterable, Optional


ROOT = Path(__file__).resolve().parents[1]
INBOX_DIR = ROOT / "content" / "journal-inbox"
INBOX_ARCHIVE_DIR = INBOX_DIR / "imported"
POSTS_DIR = ROOT / "content" / "posts"

VALID_INPUT_EXTENSIONS = {".txt", ".md", ".markdown"}


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"[\s_-]+", "-", value)
    return value.strip("-") or "journal-entry"


def human_date(entry_date: dt.date) -> str:
    return entry_date.strftime("%B %d, %Y").replace(" 0", " ")


def parse_date(value: str) -> dt.date:
    try:
        return dt.datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError as exc:
        raise ValueError(f"Invalid date '{value}'. Expected YYYY-MM-DD.") from exc


def infer_date_from_filename(path: Path) -> Optional[dt.date]:
    stem = path.stem

    patterns = (
        r"(?P<date>\d{4}-\d{2}-\d{2})",
        r"(?P<date>\d{4}_\d{2}_\d{2})",
        r"(?P<date>\d{4}\.\d{2}\.\d{2})",
    )
    for pattern in patterns:
        match = re.search(pattern, stem)
        if not match:
            continue
        raw = match.group("date").replace("_", "-").replace(".", "-")
        try:
            return parse_date(raw)
        except ValueError:
            continue

    month_name_match = re.search(
        r"(January|February|March|April|May|June|July|August|September|October|November|December)"
        r"[ -](\d{1,2})[,\- ]+(\d{4})",
        stem,
        flags=re.IGNORECASE,
    )
    if month_name_match:
        candidate = " ".join(month_name_match.groups())
        try:
            return dt.datetime.strptime(candidate, "%B %d %Y").date()
        except ValueError:
            pass

    return None


def normalize_body(raw_text: str) -> str:
    text = raw_text.replace("\r\n", "\n").replace("\r", "\n").strip()
    lines = [line.rstrip() for line in text.split("\n")]
    text = "\n".join(lines)
    # Collapse huge empty runs from copy/share exports.
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def derive_slug(source_path: Path, body: str) -> str:
    stem_slug = slugify(source_path.stem)
    if stem_slug and stem_slug != "journal-entry":
        stem_slug = re.sub(
            r"^\d{4}-\d{2}-\d{2}-?", "", stem_slug
        ) or stem_slug
        if stem_slug:
            return stem_slug

    first_line = next((line for line in body.splitlines() if line.strip()), "")
    return slugify(" ".join(first_line.split()[:8]))


def build_post_content(entry_date: dt.date, body: str) -> str:
    title = f"# {human_date(entry_date)}"
    return f"{title}\n\n{body.strip()}\n"


def resolve_input_file(explicit_path: Optional[Path]) -> Path:
    if explicit_path:
        target = explicit_path.expanduser().resolve()
        if not target.exists():
            raise FileNotFoundError(f"Input file not found: {target}")
        return target

    INBOX_DIR.mkdir(parents=True, exist_ok=True)
    candidates = sorted(
        (
            p
            for p in INBOX_DIR.iterdir()
            if p.is_file() and p.suffix.lower() in VALID_INPUT_EXTENSIONS
        ),
        key=lambda p: p.stat().st_mtime,
        reverse=True,
    )
    if not candidates:
        raise FileNotFoundError(
            f"No note files found in {INBOX_DIR}. "
            "Export a note there first (txt or md)."
        )
    return candidates[0]


def import_note(
    *,
    input_path: Path,
    entry_date: Optional[dt.date],
    slug: Optional[str],
    overwrite: bool,
    archive: bool,
) -> Path:
    if input_path.suffix.lower() not in VALID_INPUT_EXTENSIONS:
        raise ValueError(
            f"Unsupported file type '{input_path.suffix}'. Use txt or md."
        )

    raw_text = input_path.read_text(encoding="utf-8")
    body = normalize_body(raw_text)
    if not body:
        raise ValueError("Input note is empty after cleanup.")

    resolved_date = entry_date or infer_date_from_filename(input_path) or dt.date.today()
    resolved_slug = slugify(slug) if slug else derive_slug(input_path, body)

    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    output_path = POSTS_DIR / f"{resolved_date.isoformat()}-{resolved_slug}.md"
    if output_path.exists() and not overwrite:
        raise FileExistsError(
            f"Post already exists: {output_path}. Use --overwrite to replace."
        )

    output_path.write_text(build_post_content(resolved_date, body), encoding="utf-8")

    if archive and INBOX_DIR in input_path.parents:
        INBOX_ARCHIVE_DIR.mkdir(parents=True, exist_ok=True)
        archived_path = INBOX_ARCHIVE_DIR / input_path.name
        if archived_path.exists():
            timestamp = dt.datetime.now().strftime("%H%M%S")
            archived_path = INBOX_ARCHIVE_DIR / f"{input_path.stem}-{timestamp}{input_path.suffix}"
        shutil.move(str(input_path), str(archived_path))

    return output_path


def parse_args(argv: Optional[Iterable[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Import Apple Notes text files into content/posts markdown journals."
    )
    parser.add_argument(
        "input",
        nargs="?",
        type=Path,
        help="Optional path to a note file (.txt/.md). Defaults to newest file in content/journal-inbox.",
    )
    parser.add_argument(
        "--date",
        help="Force journal date in YYYY-MM-DD. Defaults to date in filename or today.",
    )
    parser.add_argument(
        "--slug",
        help="Optional slug for output filename.",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Overwrite output post if it already exists.",
    )
    parser.add_argument(
        "--no-archive",
        action="store_true",
        help="Do not move imported inbox files into content/journal-inbox/imported.",
    )
    return parser.parse_args(list(argv) if argv is not None else None)


def main(argv: Optional[Iterable[str]] = None) -> None:
    args = parse_args(argv)
    try:
        entry_date = parse_date(args.date) if args.date else None
        input_path = resolve_input_file(args.input)
        output_path = import_note(
            input_path=input_path,
            entry_date=entry_date,
            slug=args.slug,
            overwrite=args.overwrite,
            archive=not args.no_archive,
        )
    except Exception as exc:  # pylint: disable=broad-except
        sys.exit(str(exc))

    rel_output = output_path.relative_to(ROOT)
    print(f"Imported journal entry: {rel_output}")


if __name__ == "__main__":
    main()

