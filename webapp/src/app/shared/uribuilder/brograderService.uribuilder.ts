import { Injectable } from '@angular/core';

import { AbstractUriBuilder } from './abstractUriBuilder';
import { SCHEME, HOST, PORT, CONTEXT } from './brogrander-uri.constants';

const AUTHENTICATE = 'authenticate';

@Injectable()
export class BrograderServiceUriBuilder extends AbstractUriBuilder {
  constructor() {
    super(SCHEME, HOST, PORT, CONTEXT);
  }

  authenticate(): string {
    return this.build(AUTHENTICATE);
  }
}
