import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HttpService } from './http.service.ts';
import { AppStore } from '../reducers/app.store';
import { AUTHENTICATED } from '../reducers';

@Injectable()
export class AuthenticationService {
  private authenticated: boolean;

  constructor(private http: HttpService,
              private store: Store<AppStore>) {
    this.authenticated = false;
  }

  authenticate(googleUser): void {
    let idToken = googleUser.getAuthResponse().id_token;
    this.http.post('uriToBeDefined', {idToken: idToken})
      .subscribe(() => {
        this.store.dispatch({type: AUTHENTICATED});
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
