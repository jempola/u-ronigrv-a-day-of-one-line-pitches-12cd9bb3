// Writes this entry's one-line pitch to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Tell an AI agent your app idea in plain words and watch it build the whole thing on make.fun — no code, nothing to install, and the app is yours to keep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
