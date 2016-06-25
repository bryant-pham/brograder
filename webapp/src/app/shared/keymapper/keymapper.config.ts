import { OpaqueToken } from '@angular/core';

export const KEYMAPPER_CONFIG = new Map<string, string>()
  .set('Numpad1', 'A')
  .set('Numpad2', 'B')
  .set('Numpad3', 'C')
  .set('Numpad4', 'D')
  .set('Numpad5', 'E');

export const KEYMAPPER_TOKEN = new OpaqueToken('KEYMAPPER_TOKEN');
