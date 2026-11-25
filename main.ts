import fs from "node:fs";

// The GPS's one-line excuse, written verbatim: exactly one line, no trailing
// newline, so the output file is byte-identical to the line below.
const LINE =
  "The map insists that lake is a shortcut, and I trust the satellite over your panicking eyes, so congratulations, we're baptising the car at the lakeside wedding.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
