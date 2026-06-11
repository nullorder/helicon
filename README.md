<p align="center">
  <img src="public/helicon.svg" width="96" alt="Helicon — the Haglaz rune, ringed like its namesake planet" />
</p>

# Helicon

**The [Runek](https://runek.nullorder.org/) showcase world** — a walkable,
editable, procedurally generated island: a house on a terraformed hill, a lake, a
shore, trees grown from L-systems, and furniture seeded into place. Built entirely
from Runek components; no models, no textures, no CDN.

> *Helicon is a world-as-repo: the whole scene is one JSON file. Fork it, edit it,
> open a PR — the world grows by merge.*

## Walk it

```sh
just install
just dev      # → http://localhost:5173
```

**WASD** / arrows move · **Shift** run · **Space** jump · **drag** to look.
The **✎ Edit** toggle switches to an orbit-camera editor: click a component to
select it, move/rotate with gizmos, add/duplicate/delete nodes, undo with ⌘Z,
and export the world back to JSON.

## The world is a file

The entire scene lives in [`public/helicon.world.json`](./public/helicon.world.json) —
a list of `{ type, props }` nodes plus a world-level `palette` and `fog`. Every
component is a pure, deterministic function of its props (`seed` included), so
the same file renders the same world on every machine.

Every component, its props, and its defaults are documented in the
[Runek docs](https://runek.nullorder.org/).

## Runek source

Helicon consumes Runek the way any app does: component source is **vendored**
under [`src/runek/`](./src/runek) via the `runek` CLI and owned by this repo
(shadcn-style). To refresh it from a local Runek checkout:

```sh
just vendor             # pulls from ../runek
just vendor /path/to/runek
```

Once `@runek/cli` is published and the registry is live at
`runek.nullorder.org/r`, this becomes `npx runek add --overwrite …`
(see [`runek.config.json`](./runek.config.json)).

## License

[MIT](./LICENSE) © nullorder
