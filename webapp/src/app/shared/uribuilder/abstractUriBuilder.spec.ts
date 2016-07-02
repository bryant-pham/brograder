import { expect, it, describe } from '@angular/core/testing';

import { AbstractUriBuilder } from './abstractUriBuilder';

class UriBuilderImpl extends AbstractUriBuilder {
  constructor() {
    super('http', 'localhost', '8080', '');
  }

  uri(path: string): string {
    return super.build(path);
  }
}

describe('AbstractUriBuilder', () => {
  let uriBuilder = new UriBuilderImpl();

  it('should build base with appended path', () => {
    let result = uriBuilder.uri('path');

    expect(result).toEqual('http://localhost:8080/path');
  });
});
