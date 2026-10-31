// Name → component map for data-driven rendering (helicon.world.json).
// The components themselves are copy-first Runek source under src/runek; they
// import the runtime from the `@runek/core` npm package. See `just vendor` to
// refresh them from the registry.
import type { ComponentRegistry } from '@runek/core'
import { AcousticPanel } from './runek/AcousticPanel'
import { ArcadeCabinet } from './runek/ArcadeCabinet'
import { Arch } from './runek/Arch'
import { Barrel } from './runek/Barrel'
import { BassTrap } from './runek/BassTrap'
import { BeachChair } from './runek/BeachChair'
import { Bed } from './runek/Bed'
import { Bench } from './runek/Bench'
import { Birds } from './runek/Birds'
import { Book } from './runek/Book'
import { Bookshelf } from './runek/Bookshelf'
import { Bridge } from './runek/Bridge'
import { Bush } from './runek/Bush'
import { Campfire } from './runek/Campfire'
import { Cave } from './runek/Cave'
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
import { Diffuser } from './runek/Diffuser'
import { Dock } from './runek/Dock'
import { Door } from './runek/Door'
import { DrumKit } from './runek/DrumKit'
import { Fence } from './runek/Fence'
import { Flag } from './runek/Flag'
import { Floor } from './runek/Floor'
import { Flowers } from './runek/Flowers'
import { Fountain } from './runek/Fountain'
import { Fridge } from './runek/Fridge'
import { GameConsole } from './runek/GameConsole'
import { GlassRail } from './runek/GlassRail'
import { GlassWall } from './runek/GlassWall'
import { Grass } from './runek/Grass'
import { Guitar } from './runek/Guitar'
import { Hedge } from './runek/Hedge'
import { House } from './runek/House'
import { Hut } from './runek/Hut'
import { Interactable } from './runek/Interactable'
import { KitchenUnits } from './runek/KitchenUnits'
import { Lake } from './runek/Lake'
import { Lamp } from './runek/Lamp'
import { Lighthouse } from './runek/Lighthouse'
import { LightRig } from './runek/LightRig'
import { MagazineRack } from './runek/MagazineRack'
import { MicStand } from './runek/MicStand'
import { Monitor } from './runek/Monitor'
import { NeonStrip } from './runek/NeonStrip'
import { Newspapers } from './runek/Newspapers'
import { Ocean } from './runek/Ocean'
import { OfficeChair } from './runek/OfficeChair'
import { Palm } from './runek/Palm'
import { Path } from './runek/Path'
import { Person } from './runek/Person'
import { Piano } from './runek/Piano'
import { PictureLight } from './runek/PictureLight'
import { Pillar } from './runek/Pillar'
import { Plant } from './runek/Plant'
import { Player } from './runek/Player'
import { Pool } from './runek/Pool'
import { PoolTable } from './runek/PoolTable'
import { Portal } from './runek/Portal'
import { Poster } from './runek/Poster'
import { Rift } from './runek/Rift'
import { Road } from './runek/Road'
import { Rocks } from './runek/Rocks'
import { Roof } from './runek/Roof'
import { Room } from './runek/Room'
import { Rug } from './runek/Rug'
import { Sailboat } from './runek/Sailboat'
import { Screen } from './runek/Screen'
import { Shelf } from './runek/Shelf'
import { Ship } from './runek/Ship'
import { Shore } from './runek/Shore'
import { Sign } from './runek/Sign'
import { Signpost } from './runek/Signpost'
import { Sky } from './runek/Sky'
import { Slab } from './runek/Slab'
import { Sofa } from './runek/Sofa'
import { Speaker } from './runek/Speaker'
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
import { Umbrella } from './runek/Umbrella'
import { Wall } from './runek/Wall'
import { Well } from './runek/Well'
import { Whiteboard } from './runek/Whiteboard'
import { Windmill } from './runek/Windmill'
import { Window } from './runek/Window'

export const registry: ComponentRegistry = {
  AcousticPanel,
  ArcadeCabinet,
  Arch,
  Barrel,
  BassTrap,
  BeachChair,
  Bed,
  Bench,
  Birds,
  Book,
  Bookshelf,
  Bridge,
  Bush,
  Campfire,
  Cave,
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
  Diffuser,
  Dock,
  Door,
  DrumKit,
  Fence,
  Flag,
  Floor,
  Flowers,
  Fountain,
  Fridge,
  GameConsole,
  GlassRail,
  GlassWall,
  Grass,
  Guitar,
  Hedge,
  House,
  Hut,
  Interactable,
  KitchenUnits,
  Lake,
  Lamp,
  Lighthouse,
  LightRig,
  MagazineRack,
  MicStand,
  Monitor,
  NeonStrip,
  Newspapers,
  Ocean,
  OfficeChair,
  Palm,
  Path,
  Person,
  Piano,
  PictureLight,
  Pillar,
  Plant,
  Player,
  Pool,
  PoolTable,
  Portal,
  Poster,
  Rift,
  Road,
  Rocks,
  Roof,
  Room,
  Rug,
  Sailboat,
  Screen,
  Shelf,
  Ship,
  Shore,
  Sign,
  Signpost,
  Sky,
  Slab,
  Sofa,
  Speaker,
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
  Umbrella,
  Wall,
  Well,
  Whiteboard,
  Windmill,
  Window,
}
