import { Injectable, Inject } from '@angular/core';

import { KEYMAPPER_TOKEN } from "./keymapper.config";

@Injectable()
export class KeyMapper {
  private config: Map<string, string>;

  constructor(@Inject(KEYMAPPER_TOKEN) config: Map<string, string>) {
    this.config = config;
  }

  getValFromKeyCode(keyCode: string): string {
    return this.config.get(keyCode);
  }
}
