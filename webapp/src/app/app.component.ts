/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    require('./app.css')
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>BROGRADER</span>
          <span class="fill"></span>
          <a md-button router-active [routerLink]=" ['/'] ">
            Home
          </a>
      </md-toolbar>
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>
      <router-outlet></router-outlet>
    </md-content>
  `
})
export class App {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
