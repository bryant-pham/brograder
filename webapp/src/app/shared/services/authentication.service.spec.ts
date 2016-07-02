import { it, describe, expect, beforeEachProviders, beforeEach, inject } from '@angular/core/testing';
import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AuthenticationService } from './authentication.service';
import { HttpMock, StoreMock } from '../mocks';
import { HttpService } from './http.service';
import { AUTHENTICATED } from '../reducers';
import { AppStore } from '../reducers/app.store';
import { BrograderServiceUriBuilder } from '../uribuilder';

class GoogleUser {
  getAuthResponse(): string {
    return 'token';
  }
}

describe('AuthenticationService', () => {
  beforeEachProviders(() => [
    AuthenticationService,
    BrograderServiceUriBuilder,
    provide(HttpService, {useClass: HttpMock}),
    provide(Store, {useClass: StoreMock})
  ]);

  let service: AuthenticationService;
  let http: HttpService;
  let store: Store<AppStore>;

  beforeEach(inject([AuthenticationService, HttpService, Store], (_service, _http, _store) => {
    service = _service;
    http = _http;
    store = _store;
  }));

  it('dispatch authenticated if passes authentication', () => {
    let responseObs = Observable.create(observer => {
      observer.next('authenticated');
      observer.complete();
    });
    spyOn(http, 'post').and.returnValue(responseObs);
    spyOn(store, 'dispatch');

    service.authenticate(new GoogleUser());

    expect(store.dispatch).toHaveBeenCalledWith({type: AUTHENTICATED});
  });
});
