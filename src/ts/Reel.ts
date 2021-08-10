import { Container, Graphics } from 'pixi.js';
import { Symbol } from './Symbol';
import { getResource } from './Textures';
import { shuffleArray } from './utils';

export class Reel extends Container {
  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
  }

  public init(rows: number, symWidth: number, symHeight: number): void {
    const symbolIds = Object.keys(getResource('symbols').data.frames);
    const startY = -(symHeight * 2);
    for (let i = 0; i < rows + 4; i++) {
      const symId = shuffleArray(symbolIds)[0];
      const symbol = new Symbol(symId);
      symbol.x = symWidth / 2;
      symbol.y = startY + (i * symHeight) + (symHeight / 2);
      this.addChild(symbol);
    }
    const rMask = new Graphics();
    rMask.drawRect(0, 0, symWidth, symHeight * rows);
    this.addChild(rMask);
    this.mask = rMask;
  }
}
