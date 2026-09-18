<p align="center">
  <img src="public/helicon.svg" width="96" alt="Helicon — the Haglaz rune, ringed like its namesake planet" />
</p>

# Helicon

**The [Runek](https://runek.nullorder.org/) showcase world** — a walkable,
editable, procedurally generated coastline: a curved modernist mansion cantilevered
over an ocean cliff, with a glass-ringed living rotunda, a rooftop bedroom drum, a
floating pool terrace, palms, and a helipad. An arched gate opens onto a rock
causeway to the mainland, and the headland's east flank fans out into a sand-spit
beach with a campfire at the waterline. A small cast of procedural people keeps
the estate company: a gatekeeper at the arch, a host waving from the door, a
scholar in the library, guests by the pool, a gardener at the flower bed, a
traveler on the causeway, and two figures at the campfire. Built entirely from
Runek components; no models, no textures, no CDN.

> *Helicon is a world-as-repo: the whole scene is one JSON file. Fork it, edit it,
> open a PR — the world grows by merge.*

## Walk it

```sh
just install
just dev      # → http://localhost:5173
```

**WASD** move · **arrows** look · **Shift** run · **Space** jump · **drag** to look.
The **✎ Edit** toggle switches to an orbit-camera editor: click a component to
select it, move/rotate with gizmos, add/duplicate/delete nodes, undo with ⌘Z,
and export the world back to JSON.

## The world is a file

The entire scene lives in [`public/helicon.world.json`](./public/helicon.world.json) —
a list of `{ type, props }` nodes plus world-level identity (`meta`, `source`),
`palette`, `fog`, and a pinned `time` of day. Every component is a pure,
deterministic function of its props (`seed` included), so the same file renders
the same world on every machine.

Every component, its props, and its defaults are documented in the
[Runek docs](https://runek.nullorder.org/).

## Runek source

Helicon consumes Runek the way any app does: the runtime is the published
[`@runek/core`](https://www.npmjs.com/package/@runek/core) npm dependency, and
component source is **copied** under [`src/runek/`](./src/runek) via the
[`@runek/cli`](https://www.npmjs.com/package/@runek/cli) CLI and owned by this
repo (shadcn-style). To refresh the components:

```sh
just vendor                  # pulls from the live registry (runek.nullorder.org/r)
just vendor-local            # pulls from a local ../runek checkout
just vendor-local /path/to/runek
```

The copied components import `@runek/core` from npm, so nothing is rewritten on
the way in (see [`runek.config.json`](./runek.config.json)).

## License

[MIT](./LICENSE) © nullorder
