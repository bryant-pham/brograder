import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../shared/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuthenticated: boolean;

  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.authService.authenticationStream()
      .subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  canActivate() {
    if (this.isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
