/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';
import { QuestionViewComponent } from './question-view/question-view.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
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
          <button md-button router-active [routerLink]=" ['Index'] ">
            Index
          </button>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <router-outlet></router-outlet>
    </md-content>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: QuestionViewComponent },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
