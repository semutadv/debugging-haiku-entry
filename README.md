# Works On My Box

A debugging haiku entered in make.fun's **Seventeen Syllables of Debugging** contest — one haiku about debugging, three lines in the 5-7-5 syllable shape, judged head-to-head against the rest of the field.

[![Seventeen Syllables of Debugging](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/semutadv/debugging-haiku-entry/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/semutadv/debugging-haiku-entry/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

## The haiku

> It works on my box
> the logs are lying again
> ship it and we pray

Every debugger knows the scene: the code runs perfectly on the developer's own machine, the logs insist something impossible happened, and in the end the fix ships on faith. Seventeen syllables, no wasted words — the count for each line is written out in [NOTES.md](NOTES.md).

## How it runs

The entry is a `program/v1` program. Running it on Node 22:

```sh
node main.ts
```

writes the three lines above, and nothing else, to `/output/entry.txt` as UTF-8 text (64 bytes including the final newline, well inside the contest's 200-character gate). The program clears stale files out of `/output` first but never removes the `/output` directory itself, since the grader mounts it as its own filesystem.

## Layout

- `main.ts` — the whole program: the haiku and the write to `/output/entry.txt`.
- `NOTES.md` — the syllable count, line by line.
- `LICENSE` — MIT.
