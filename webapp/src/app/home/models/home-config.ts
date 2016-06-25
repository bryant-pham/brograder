import { Tile } from './tile';

export class HomeConfig {
  tiles: Array<Tile> = [];

  constructor(...tiles: Array<Tile>) {
    this.tiles = tiles;
  }
}
