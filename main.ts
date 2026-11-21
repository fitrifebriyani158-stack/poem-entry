
import { writeFileSync } from 'node:fs';
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT = "The door was never locked.\nIt only weighed a little,\nlike a question no one asked.\n\nPermission is a lamp already lit\nin a room you keep walking past.\nGo in. The switch was yours all along.";
writeFileSync(dir + '/entry.txt', TEXT);
