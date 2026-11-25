// Monday Morning Punchlines — one joke about Monday mornings.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 10 candidates against the judge's
// published criteria (on-topic Monday morning first; a real laugh with a
// turn that lands, not a complaint; surprise; economy; freshness):
//   WINNER (89 chars, limit 200): "The weekend filed a restraining order
//   against Monday. Monday ignored it — it always does."
//   Why it wins: the legal framing is the most surprising twist in the set
//   (a restraining order between two days of the week), and the punch
//   ("it always does") lands in the last three words — Monday is
//   incorrigible, which is exactly why the weekend gave up. Concrete
//   nouns (weekend, restraining order, Monday), no tired Monday cliche:
//   no coffee, no alarm, no "I hate Mondays", no snooze button. The
//   em-dash before the punch is kept on purpose: it costs 2 extra bytes
//   (91 bytes for 89 chars) but buys the beat the punchline lands on,
//   and the tie-break only matters on an exact rate tie.
//   Runner-up: the to-do list that woke up before me and is already
//   disappointed in me — same personification trick, smaller twist.
//   Discarded: the rain-check/invoice line (clever but the punch is
//   smaller); the software-update line (explains its own joke); the
//   "we need to talk" line (relatable, but the turn is a familiar
//   relationship cliche, not a surprise).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `The weekend filed a restraining order against Monday. Monday ignored it — it always does.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
