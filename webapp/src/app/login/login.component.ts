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
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      'signIn',
      {
        'onSuccess': this.onGoogleLoginSuccess,
        'longtitle': true,
        'width': 200
      }
    );
  }

  onGoogleLoginSuccess(loggedInUser) {
    console.log(loggedInUser.getAuthResponse());
  }
}
