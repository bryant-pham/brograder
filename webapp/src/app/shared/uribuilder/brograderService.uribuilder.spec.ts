import { expect, it, describe, beforeEachProviders, beforeEach, inject } from '@angular/core/testing';

import { BrograderServiceUriBuilder } from './brograderService.uribuilder';

describe('BrograderServiceUriBuilder', () => {
  beforeEachProviders(() => [
    BrograderServiceUriBuilder
  ]);

  let uriBuilder: BrograderServiceUriBuilder;

  beforeEach(inject([BrograderServiceUriBuilder], _uriBuilder => {
    uriBuilder = _uriBuilder;
  }));

  it('should build authenticate uri', () => {
    let result = uriBuilder.authenticate();

    expect(result).toEqual('http://localhost:8080/authenticate');
  });
});
