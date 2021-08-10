import {
  Application, Container, Point, Sprite, Texture,
} from 'pixi.js';
import { getTexture } from './Textures';
import { Reel } from './Reel';
import { Button } from './Button';

export class Scene extends Container {
  public initialized: boolean;

  private center: Point;

  constructor(private readonly app:Application, parent: Container) {
    super();
    parent.addChild(this);
    this.initialized = false;
    this.center = new Point(this.app.view.width / 2, this.app.view.height / 2);
  }

  public init(): void {
    this.createSprite('gameBG', this.center.x, this.center.y);
    this.createSprite('reelBG', this.center.x, this.center.y);
    const logo = this.createSprite('gameLogo', this.center.x, 40);
    logo.scale.set(0.7);

    const spin = new Button('commonUI', 'spin_normal.png', 'spin_over.png', 'spin_down.png');
    spin.x = this.center.x;
    spin.y = this.app.view.height - spin.height / 2;
    spin.width = 132;
    spin.height = 132;
    this.addChild(spin);

    for (let i = 0; i < 5; i++) {
      const reel = new Reel(100 + (i * 217), 75);
      reel.init(3, 212, 178);
      this.addChild(reel);
    }
    this.initialized = true;
  }

  private createSprite(textureId: string, x: number, y:number): Sprite {
    const sprite = new Sprite(getTexture(textureId) as Texture);
    sprite.anchor.set(0.5);
    sprite.position.set(x, y);
    return this.addChild(sprite);
  }

  // eslint-disable-next-line class-methods-use-this
  public update(delta?: number) {
    // eslint-disable-next-line no-unused-expressions
    delta;
  }
}
