import { Injectable } from '@angular/core';

import { HttpService } from './http.service.ts';

@Injectable()
export class AuthenticationService {
  private authenticated: boolean;

  constructor(private http: HttpService) {
    this.authenticated = false;
  }

  authenticate(googleUser): void {
    let idToken = googleUser.getAuthResponse().id_token;
    this.http.post('uriToBeDefined', {idToken: idToken})
      .subscribe(() => {
        this.authenticated = true;
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }
}
