import { provide } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

import { KeyMapper } from "./keymapper";
import { KEYMAPPER_TOKEN } from "./keymapper.config";

describe('KeyMapper', () => {
  let CONFIG: Map<string, string>;

  beforeEach(() => {
    CONFIG = new Map<string, string>()
      .set('Numpad1', 'A');
  });

  beforeEachProviders(() => [
    provide(KEYMAPPER_TOKEN, {useValue: CONFIG}),
    KeyMapper
  ]);

  let keymapper: KeyMapper;

  beforeEach(inject([KeyMapper], (keymap) => {
    keymapper = keymap;
  }));

  it('should return A for Numpad1 keycode', () => {
    let result = keymapper.getValFromKeyCode('Numpad1');

    expect(result).toBe('A');
  });
});
