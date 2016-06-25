/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { RouterActive } from './router-active';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { QuestionViewComponent } from './question-view/question-view.component';
import { HomeComponent } from './home/home.component';
import { StudentProfileListComponent } from './student-profile-list/student-profile-list.component';
import { GradeStudentListComponent } from './grade-student-list/grade-student-list.component';

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
  { path: '/', name: 'Home', component: HomeComponent },
  { path: '/assignments', name: 'Assignments', component: AssignmentListComponent },
  { path: '/questions', name: 'Questions', component: QuestionViewComponent },
  { path: '/select-student-for-assignment', name: 'SelectStudentForAssignment', component: GradeStudentListComponent },
  { path: '/class', name: 'Class', component: StudentProfileListComponent },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
