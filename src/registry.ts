// Name → component map for data-driven rendering (helicon.world.json).
// The components themselves are vendored Runek source under src/runek — see
// `just vendor` to refresh them from the registry.
import { Bookshelf } from './runek/Bookshelf'
import { Chair } from './runek/Chair'
import type { ComponentRegistry } from './runek/core'
import { Door } from './runek/Door'
import { Floor } from './runek/Floor'
import { Grass } from './runek/Grass'
import { House } from './runek/House'
import { Lake } from './runek/Lake'
import { Lamp } from './runek/Lamp'
import { LightRig } from './runek/LightRig'
import { Player } from './runek/Player'
import { Rocks } from './runek/Rocks'
import { Roof } from './runek/Roof'
import { Room } from './runek/Room'
import { Rug } from './runek/Rug'
import { Shelf } from './runek/Shelf'
import { Shore } from './runek/Shore'
import { Sky } from './runek/Sky'
import { Staircase } from './runek/Staircase'
import { Table } from './runek/Table'
import { Terrain } from './runek/Terrain'
import { Trees } from './runek/Trees'
import { Wall } from './runek/Wall'
import { Window } from './runek/Window'

export const registry: ComponentRegistry = {
  Bookshelf,
  Chair,
  Door,
  Floor,
  Grass,
  House,
  Lake,
  Lamp,
  LightRig,
  Player,
  Rocks,
  Roof,
  Room,
  Rug,
  Shelf,
  Shore,
  Sky,
  Staircase,
  Table,
  Terrain,
  Trees,
  Wall,
  Window,
}
