import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var gapi: any;

@Component({
  selector: 'login',
  template: require('./login.html')
})
export class LoginComponent implements AfterViewInit {
  constructor(private router: Router) {
  }

  ngAfterViewInit() {
    gapi.signin2.render(
      'signIn',
      {
        'onSuccess': this.onGoogleLoginSuccess,
        'longtitle': true,
        'width': 200
      }
    );
  }

  onGoogleLoginSuccess(googleUser) {
    console.log(googleUser.getAuthResponse());
  }
}
