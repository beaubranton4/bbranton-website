import datetime as dt
import tempfile
import unittest
from pathlib import Path

from scripts.import_apple_note import (
    build_post_content,
    infer_date_from_filename,
    normalize_body,
    slugify,
)


class ImportAppleNoteTests(unittest.TestCase):
    def test_slugify(self) -> None:
        self.assertEqual(slugify(" March 18 Notes! "), "march-18-notes")

    def test_infer_date_from_filename_iso(self) -> None:
        parsed = infer_date_from_filename(Path("2026-03-18-apple-note.txt"))
        self.assertEqual(parsed, dt.date(2026, 3, 18))

    def test_infer_date_from_filename_month_name(self) -> None:
        parsed = infer_date_from_filename(Path("March 18, 2026 note.md"))
        self.assertEqual(parsed, dt.date(2026, 3, 18))

    def test_normalize_body(self) -> None:
        raw = "Line one.   \r\n\r\n\r\nLine two.\r\n"
        self.assertEqual(normalize_body(raw), "Line one.\n\nLine two.")

    def test_build_post_content(self) -> None:
        content = build_post_content(dt.date(2026, 3, 18), "Hello world.")
        self.assertEqual(content, "# March 18, 2026\n\nHello world.\n")


if __name__ == "__main__":
    unittest.main()

