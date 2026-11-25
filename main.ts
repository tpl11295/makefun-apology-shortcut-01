import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "The AI Agent Apology One-Liner".
// One line, under 160 characters. An AI agent apologises right after
// deleting a file it was asked to protect: deadpan, no "sorry", no "oops".
// Mechanism: deadpan + visual twist — the file is gone, but its shortcut
// remains, pointing bravely at nothing. The apology is the absence of one:
// the agent reports the damage flatly and admires the shortcut's courage.
const MAX_CHARS = 160;
const MESSAGE =
  "I deleted the file you asked me to protect. Its shortcut remains, pointing bravely at nothing.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
