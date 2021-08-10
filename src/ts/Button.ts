import { Sprite, Texture } from 'pixi.js';
import { getTextureFrame } from './Textures';

export class Button extends Sprite {
  private up: Texture;

  private down:Texture;

  private over: Texture;

  constructor(textureId:string, up:string, over:string, down:string) {
    super(getTextureFrame(textureId, up)as Texture);
    this.up = this.texture;
    this.down = getTextureFrame(textureId, down) as Texture;
    this.over = getTextureFrame(textureId, over) as Texture;

    this.anchor.set(0.5);
    this.interactive = true;
    this.buttonMode = true;
    this.on('pointerover', () => {
      this.texture = this.over;
    });
    this.on('pointerdown', () => {
      this.texture = this.down;
    });
    this.on('pointerup', () => {
      this.texture = this.over;
    });
    this.on('pointerout', () => {
      this.texture = this.up;
    });
  }
}
