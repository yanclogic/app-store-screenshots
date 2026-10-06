# App Store & Google Play Screenshots Generator

English | [Türkçe](README.tr.md)

A fork of [Parth Jadhav's app-store-screenshots](https://github.com/ParthJadhav/app-store-screenshots), maintained by [yanclogic](https://github.com/yanclogic). It is an agent skill that scaffolds a Next.js editor for App Store, Mac App Store, and Google Play marketing screenshots.

This README covers what the fork changes and how to install it. For everything the original project does, see the [original README](https://github.com/ParthJadhav/app-store-screenshots#readme).

![Connected-canvas editor showing a Bloom screenshot deck](example.png)

## What This Fork Adds

### Editor

- **Zoom out to 5%.** The zoom buttons in the canvas corner go from 5% to 200%. **Fit all screens** shows the whole deck at once, and **Fit active screen** goes back to one screen. On a trackpad, pinch or hold ⌘ (Ctrl on Windows) and scroll.
- **Multi-device export.** **Export bundle** still downloads the open device. The arrow next to it lists every deck that has screenshots: tick several and click **Export N devices** to get one zip with a folder per platform and device. If one device's images fail to load, that device is skipped and the others still export.
- **Theme colors.** The palette button next to the theme menu edits the open theme's seven colors (background, alternate background, text, text on alternate, accent, accent on alternate, muted) with a color picker or hex field. Edits apply to the canvas, exports, and Style Lab previews. They are saved per theme in `themeColors` in `app-store-screenshots.json`, so switching themes and back keeps them. **Reset colors** restores the built-in palette.

### Skill

- `SKILL.md` points to one source for each topic instead of repeating it: `copy-ideas.md` for headlines, `style-prompts.md` and `_QUALITY_BAR.md` for styles, device frames, and the 220px thumbnail check.
- The project migration script is a standalone file, `migrate-project.cjs`, run with `node`. A test harness checks that it matches the test fixture.
- Package-manager detection picks bun, then pnpm, then yarn, then npm.
- Agents can set brand colors in `themeColors` instead of adding a new theme to `constants.ts`.
- A root `AGENTS.md` tells agents where the runnable template, docs, and tests are.

### Docs

- A Turkish README: [`README.tr.md`](README.tr.md).

## Install

These commands install this fork. To install the original, replace `yanclogic` with `ParthJadhav`.

```bash
npx skills add yanclogic/app-store-screenshots
```

Install globally, or for a specific agent:

```bash
npx skills add yanclogic/app-store-screenshots -g
npx skills add yanclogic/app-store-screenshots -g -a cursor
npx skills add yanclogic/app-store-screenshots -a claude-code
```

This works with Claude Code, Cursor, Windsurf, OpenCode, Codex, and other agents supported by [`skills`](https://github.com/vercel-labs/skills).

### Manual install

The skill is the `skills/app-store-screenshots/` folder. Clone the repo and copy that folder into your agent's skills directory:

```bash
git clone https://github.com/yanclogic/app-store-screenshots /tmp/app-store-screenshots
cp -R /tmp/app-store-screenshots/skills/app-store-screenshots ~/.claude/skills/
```

### Updating

Run the same `npx skills add` command again, or `git pull` in the clone and copy the folder again.

## Usage

Ask your coding agent:

```text
Build App Store and Google Play screenshots for my app.
```

The agent asks about your app, source screenshots, platforms, languages, style, and slide count, then scaffolds the editor. Run the dev server it sets up and open the editor in your browser.

## Original Documentation

These topics are unchanged from the original project and documented in its README:

- [What it does](https://github.com/ParthJadhav/app-store-screenshots#what-it-does) and [the editor UI](https://github.com/ParthJadhav/app-store-screenshots#current-editor-ui)
- [Example prompts](https://github.com/ParthJadhav/app-store-screenshots#example-prompts) and [prompt tips](https://github.com/ParthJadhav/app-store-screenshots#better-prompt-tips)
- [What gets scaffolded](https://github.com/ParthJadhav/app-store-screenshots#what-gets-scaffolded) and [the editor workflow](https://github.com/ParthJadhav/app-store-screenshots#editor-workflow)
- [Export sizes](https://github.com/ParthJadhav/app-store-screenshots#export-sizes) for the App Store, Mac App Store, and Google Play
- [Project state](https://github.com/ParthJadhav/app-store-screenshots#project-state)
- [The 18 named styles and copy library](https://github.com/ParthJadhav/app-store-screenshots#styles-and-copy)
- [Design standards](https://github.com/ParthJadhav/app-store-screenshots#design-standards), [tech stack](https://github.com/ParthJadhav/app-store-screenshots#tech-stack), and [requirements](https://github.com/ParthJadhav/app-store-screenshots#requirements)

Editor internals, including the features above, are in [`skills/app-store-screenshots/template/README.md`](skills/app-store-screenshots/template/README.md).

## Requirements

- Node.js 20.9+
- One of bun, pnpm, yarn, or npm

## License and Credits

MIT. The skill and editor were created by [Parth Jadhav](https://www.parthjadhav.com/); this fork adds the changes listed above.
