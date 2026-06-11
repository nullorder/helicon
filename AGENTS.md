# AGENTS.md

Guidelines for AI agents (Claude Code and others) working in this repository.

## What this is

**Helicon** — the showcase world for [Runek](https://github.com/nullorder/runek)
("shadcn for 3D worlds"): a walkable, editable, procedurally generated island built
entirely from Runek components. No binary assets, no server; deploys as a static site.

The whole scene is **data**: [`public/helicon.world.json`](./public/helicon.world.json)
(component nodes + a world-level `palette` and `fog`). The app shell just loads that
file and renders it via `<WorldRenderer>` (walk) or `<WorldEditor>` (edit).

## Repository layout

```
index.html, vite.config.ts      Vite + React app shell
src/
  main.tsx, App.tsx, index.css  the app: load the world JSON, Walk/Edit toggle
  registry.ts                   name → component map for data-driven rendering
  runek/                        VENDORED Runek source (core/ + one file per component)
public/helicon.world.json       the world itself — the main thing this repo grows
runek.config.json               runek CLI config (registry URL, install dir)
```

## Vendored Runek source (`src/runek/`)

`src/runek/` is pulled from the Runek source registry by the `runek` CLI and owned
by this repo, shadcn-style. Rules:

- **`just vendor` re-pulls everything with `--overwrite`** (from a local `../runek`
  checkout by default) — local edits under `src/runek/` will be clobbered. Prefer
  upstreaming component fixes to `nullorder/runek`, then re-vendor.
- `src/registry.ts` and `src/App.tsx` are owned here; when the upstream catalog
  changes, update `src/registry.ts` to match.
- Once `@runek/cli` is published and the registry is live at
  `runek.nullorder.org/r`, vendoring becomes `npx runek add --overwrite …`
  (see `runek.config.json`).

## Commands

This repo uses [`just`](https://just.systems) as the task runner.

```sh
just            # list all recipes
just install    # install dependencies (pnpm)
just dev        # Vite dev server
just build      # typecheck + production build
just preview    # preview the production build
just typecheck  # tsc --noEmit
just check      # the verification gate (typecheck + build)
just vendor     # re-pull Runek source from ../runek (or a given path)
just clean      # remove build output + node_modules
```

Node ≥ 20 (Node 24 pinned via `.nvmrc`), pnpm. **Before handing off a change, run
`just check`** — it must pass.

## Growing the world

Edit `public/helicon.world.json`: a `nodes` list of `{ type, props }` plus `palette`
and `fog`. Use the in-app **✎ Edit** mode (click-select, gizmos, add/duplicate/
delete, ⌘Z undo) and **Export JSON** to round-trip changes back into the file. Keep
the world deterministic — placement and `seed`s live in data; the app code stays
free of randomness.

## Core principles (inherited from Runek — never compromise these)

1. **Procedural-first** — geometry from props + `seed`; no `.glb`, no textures, no CDN.
2. **A world is data** — every component is a pure, deterministic function of its props.
3. **Seeded determinism** — same seed → same result, everywhere.
4. **Parametric LOD** — detail scales with props/distance.
5. **Local-first** — no backend; the world deploys as a static site.

## Code conventions

- **TypeScript everywhere.** 1 unit = 1 meter, Y-up, rotations in radians.
- Match the vendored code's style (2-space indent, single quotes); avoid
  over-commenting — comment the *why*, not the *what*.

## Working agreements

- **Never run `git add` or `git commit` unless explicitly asked.** Leave staging
  and commits to the user.
