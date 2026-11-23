// Six Words, One Story — make.fun bounty entry
// u-deranalabs-six-words-one-story-f982e410
//
// Writes exactly one six-word story to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Node.js, stdlib only, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story. Chosen from five drafted candidates for the strongest
// turn: the letters stop, but the mailbox keeps waiting — a whole
// life (and its end) implied in six words.
const STORY = "Grandma's letters stopped. The mailbox waited.";

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Gate checks (bounty: UTF-8 text, 1-60 chars, exactly six words).
  // Whitespace-only is rejected first, so an empty-looking story
  // never slips past the length check.
  if (!STORY.trim()) {
    throw new Error("story must not be only whitespace");
  }
  const line = STORY.trim();
  if (line.length < 1 || line.length > 60) {
    throw new Error(`story must be 1-60 characters, got ${line.length}`);
  }
  if (/\n|\r/.test(line)) {
    throw new Error("story must be a single line");
  }
  const words = countWords(line);
  if (words !== 6) {
    throw new Error(`story must be exactly 6 words, got ${words}`);
  }

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line + "\n", "utf8");

  // Read back and verify: what landed on disk must be the story,
  // byte for byte, so a silent write failure cannot pass unnoticed.
  const written = readFileSync(outPath, "utf8");
  if (written !== line + "\n") {
    throw new Error(`entry.txt does not match the story: ${JSON.stringify(written)}`);
  }
  console.log(`wrote ${outPath} (${line.length} chars, ${words} words)`);
  console.log(line);
}

main();
