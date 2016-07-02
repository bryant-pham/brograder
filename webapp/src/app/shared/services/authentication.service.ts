import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service.ts';
import { AppStore } from '../reducers/app.store';
import { AUTHENTICATION, AUTHENTICATED } from '../reducers';
import { BrograderServiceUriBuilder } from '../uribuilder';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpService,
              private store: Store<AppStore>,
              private uriBuilder: BrograderServiceUriBuilder) {
  }

  authenticate(googleUser): void {
    let idToken = googleUser.getAuthResponse().id_token;
    let uri = this.uriBuilder.authenticate();
    this.http.post(uri, {idToken: idToken})
      .subscribe(() => {
        this.store.dispatch({type: AUTHENTICATED});
      });
  }

  authenticationStream(): Observable<boolean> {
    return <Observable<boolean>> this.store.select(AUTHENTICATION);
  }
}
