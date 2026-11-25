import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Joke Laugh-Off — a single line about office life.
//
// The joke turns on one word doing two jobs: "support". The chair gives
// literal, physical support — lumbar, all day, without being asked. The
// manager is supposed to give the other kind — backing, cover, help —
// and never does. The punchline lands in the last four words, when the
// comparison snaps from furniture to the boss.
//
// Freshness check against the live field before submitting: no chair
// joke, no manager-support joke, and none of the usual office cliches
// (meetings-that-could-be-emails, printers, coffee, Mondays) in the line.
const JOKE =
  "My office chair gives me more support than my manager ever has.";

// The grader mounts the repo read-only, so the entry must go to the
// absolute output path, never a relative output/ directory.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
