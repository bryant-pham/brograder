import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthenticationService } from '../shared/services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private authService: AuthenticationService) {
  }

  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
