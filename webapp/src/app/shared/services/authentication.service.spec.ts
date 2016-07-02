import { it, describe, expect, beforeEachProviders, beforeEach, inject } from '@angular/core/testing';
import { provide } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './authentication.service';
import { HttpMock } from '../mocks/http.mock';
import { HttpService } from './http.service';

class GoogleUser {
  getAuthResponse(): string {
    return 'token';
  }
}

describe('AuthenticationService', () => {
  beforeEachProviders(() => [
    AuthenticationService,
    provide(HttpService, {useClass: HttpMock})
  ]);

  let service: AuthenticationService;
  let http: HttpService;

  beforeEach(inject([AuthenticationService, HttpService], (_service, _http) => {
    service = _service;
    http = _http;
  }));

  it('set authenticated to true if passes authentication', () => {
    let responseObs = Observable.create(observer => {
      observer.next('authenticated');
      observer.complete();
    });
    spyOn(http, 'post').and.returnValue(responseObs);

    service.authenticate(new GoogleUser());

    expect(service.isAuthenticated()).toBeTruthy();
  });
});
