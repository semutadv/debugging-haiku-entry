// Works On My Box — a debugging haiku entered in make.fun's
// "Seventeen Syllables of Debugging" contest.
//
// The whole entry is three lines in the classic 5-7-5 shape:
//
//   It works on my box
//   the logs are lying again
//   ship it and we pray
//
// This program has exactly one job: place those three lines, and
// nothing else, into /output/entry.txt as UTF-8 text so the sealed
// gate scorer can read them back.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The syllable shape the contest gate and judge expect, line by line.
// NOTES.md shows the word-by-word count behind each number.
const SYLLABLE_SHAPE: number[] = [5, 7, 5];

const HAIKU_LINES: string[] = [
  "It works on my box", // 5 syllables
  "the logs are lying again", // 7 syllables
  "ship it and we pray", // 5 syllables
];

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// The grader mounts /output as its own filesystem, so the directory
// itself must never be removed (removing a mount point fails with
// EBUSY). We only make sure it exists and clear out anything stale
// sitting inside it, leaving the directory itself untouched.
function prepareOutputDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  prepareOutputDir(OUTPUT_DIR);
  const text = HAIKU_LINES.join("\n") + "\n";
  writeFileSync(OUTPUT_FILE, text, "utf8");
}

main();
