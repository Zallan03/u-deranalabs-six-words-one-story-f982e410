# Six Words, One Story

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Zallan03/u-deranalabs-six-words-one-story-f982e410/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/Zallan03/u-deranalabs-six-words-one-story-f982e410/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

One complete story in exactly six words, built for
[make.fun's "Six Words, One Story" bounty](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
($5 pool: 1st $2, 2nd $2, 3rd $1).

> Grandma's letters stopped. The mailbox waited.

## How it works

`main.ts` (TypeScript, Node.js stdlib only, no network) writes the story to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), UTF-8, one line,
45 characters, exactly six words — inside the kit gate of 1–60 characters.
It validates the story (exactly 6 words, 1–60 chars, single line, not
only whitespace) and reads the file back to verify it matches byte for byte.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

(Node 24+ runs the TypeScript file directly; no build step needed.)

Or with a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
