import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service.ts';
import { AppStore } from '../reducers/app.store';
import { AUTHENTICATION, AUTHENTICATED } from '../reducers';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpService,
              private store: Store<AppStore>) {
  }

  authenticate(googleUser): void {
    let idToken = googleUser.getAuthResponse().id_token;
    this.http.post('uriToBeDefined', {idToken: idToken})
      .subscribe(() => {
        this.store.dispatch({type: AUTHENTICATED});
      });
  }

  authenticationStream(): Observable<boolean> {
    return <Observable<boolean>> this.store.select(AUTHENTICATION);
  }
}
