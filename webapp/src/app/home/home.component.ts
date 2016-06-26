import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HomeConfig } from './models/home-config';
import { TEACHER_HOME_CONFIG } from './models/teacher-home-config';

@Component({
  selector: 'bro-student-home',
  template: require('./home.html'),
  styles: [ require('./home.css') ]
})
export class HomeComponent {
  CONFIG: HomeConfig;

  constructor(private router: Router) {
    this.CONFIG = TEACHER_HOME_CONFIG;
  }

  navigateTo(routerKey: string) {
    this.router.navigate([routerKey]);
  }
}
