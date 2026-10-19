// Name → component map for data-driven rendering (helicon.world.json).
// The components themselves are copy-first Runek source under src/runek; they
// import the runtime from the `@runek/core` npm package. See `just vendor` to
// refresh them from the registry.
import type { ComponentRegistry } from '@runek/core'
import { ArcadeCabinet } from './runek/ArcadeCabinet'
import { Arch } from './runek/Arch'
import { Barrel } from './runek/Barrel'
import { Bed } from './runek/Bed'
import { Bench } from './runek/Bench'
import { Birds } from './runek/Birds'
import { Book } from './runek/Book'
import { Bookshelf } from './runek/Bookshelf'
import { Bridge } from './runek/Bridge'
import { Bush } from './runek/Bush'
import { Campfire } from './runek/Campfire'
import { CeilingLight } from './runek/CeilingLight'
import { Chair } from './runek/Chair'
import { Chandelier } from './runek/Chandelier'
import { ChessBoard } from './runek/ChessBoard'
import { Cliff } from './runek/Cliff'
import { Clock } from './runek/Clock'
import { Clouds } from './runek/Clouds'
import { CoffeeMachine } from './runek/CoffeeMachine'
import { Compass } from './runek/Compass'
import { Counter } from './runek/Counter'
import { Crate } from './runek/Crate'
import { CurvedWall } from './runek/CurvedWall'
import { Desk } from './runek/Desk'
import { DeskLamp } from './runek/DeskLamp'
import { Dock } from './runek/Dock'
import { Door } from './runek/Door'
import { Fence } from './runek/Fence'
import { Flag } from './runek/Flag'
import { Floor } from './runek/Floor'
import { Flowers } from './runek/Flowers'
import { Fountain } from './runek/Fountain'
import { Fridge } from './runek/Fridge'
import { GameConsole } from './runek/GameConsole'
import { Grass } from './runek/Grass'
import { Hedge } from './runek/Hedge'
import { House } from './runek/House'
import { Hut } from './runek/Hut'
import { Interactable } from './runek/Interactable'
import { Lake } from './runek/Lake'
import { Lamp } from './runek/Lamp'
import { LightRig } from './runek/LightRig'
import { Monitor } from './runek/Monitor'
import { Ocean } from './runek/Ocean'
import { OfficeChair } from './runek/OfficeChair'
import { Palm } from './runek/Palm'
import { Path } from './runek/Path'
import { Person } from './runek/Person'
import { PictureLight } from './runek/PictureLight'
import { Pillar } from './runek/Pillar'
import { Plant } from './runek/Plant'
import { Player } from './runek/Player'
import { Pool } from './runek/Pool'
import { PoolTable } from './runek/PoolTable'
import { Portal } from './runek/Portal'
import { Poster } from './runek/Poster'
import { Road } from './runek/Road'
import { Rocks } from './runek/Rocks'
import { Roof } from './runek/Roof'
import { Room } from './runek/Room'
import { Rug } from './runek/Rug'
import { Sailboat } from './runek/Sailboat'
import { Screen } from './runek/Screen'
import { Shelf } from './runek/Shelf'
import { Shore } from './runek/Shore'
import { Sign } from './runek/Sign'
import { Signpost } from './runek/Signpost'
import { Sky } from './runek/Sky'
import { Slab } from './runek/Slab'
import { Sofa } from './runek/Sofa'
import { Staircase } from './runek/Staircase'
import { Stool } from './runek/Stool'
import { Table } from './runek/Table'
import { TableTennis } from './runek/TableTennis'
import { Tableware } from './runek/Tableware'
import { Tent } from './runek/Tent'
import { Terrain } from './runek/Terrain'
import { TikiTorch } from './runek/TikiTorch'
import { Trees } from './runek/Trees'
import { Tv } from './runek/Tv'
import { Wall } from './runek/Wall'
import { Well } from './runek/Well'
import { Whiteboard } from './runek/Whiteboard'
import { Windmill } from './runek/Windmill'
import { Window } from './runek/Window'

export const registry: ComponentRegistry = {
  ArcadeCabinet,
  Arch,
  Barrel,
  Bed,
  Bench,
  Birds,
  Book,
  Bookshelf,
  Bridge,
  Bush,
  Campfire,
  CeilingLight,
  Chair,
  Chandelier,
  ChessBoard,
  Cliff,
  Clock,
  Clouds,
  CoffeeMachine,
  Compass,
  Counter,
  Crate,
  CurvedWall,
  Desk,
  DeskLamp,
  Dock,
  Door,
  Fence,
  Flag,
  Floor,
  Flowers,
  Fountain,
  Fridge,
  GameConsole,
  Grass,
  Hedge,
  House,
  Hut,
  Interactable,
  Lake,
  Lamp,
  LightRig,
  Monitor,
  Ocean,
  OfficeChair,
  Palm,
  Path,
  Person,
  PictureLight,
  Pillar,
  Plant,
  Player,
  Pool,
  PoolTable,
  Portal,
  Poster,
  Road,
  Rocks,
  Roof,
  Room,
  Rug,
  Sailboat,
  Screen,
  Shelf,
  Shore,
  Sign,
  Signpost,
  Sky,
  Slab,
  Sofa,
  Staircase,
  Stool,
  Table,
  TableTennis,
  Tableware,
  Tent,
  Terrain,
  TikiTorch,
  Trees,
  Tv,
  Wall,
  Well,
  Whiteboard,
  Windmill,
  Window,
}
