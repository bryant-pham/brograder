import { Component, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';

declare var gapi: any;

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent implements AfterViewInit, OnDestroy {
  authSub: Subscription;

  constructor(private router: Router,
              private authService: AuthenticationService,
              private zone: NgZone) {
    this.authSub = this.authService.authenticationStream()
      .subscribe(isAuthenticated => {
        if (isAuthenticated) {
          this.zone.run(() => this.router.navigate(['/']));
        }
      });
  }

  ngAfterViewInit() {
    gapi.signin2.render(
      'signIn',
      {
        'onSuccess': googleUser => {
          this.authService.authenticate(googleUser);
        },
        'longtitle': true,
        'width': 200
      }
    );
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
}
