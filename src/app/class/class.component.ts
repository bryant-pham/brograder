import { Component } from '@angular/core';

import { Class } from "../shared/models";
import { ClassService } from "../shared/services/class.service.ts";

@Component({
  selector: 'bro-class',
  template: require('./class.html'),
  providers: [ ClassService ]
})
export class ClassComponent {
  currentClass: Class;

  constructor(private classService: ClassService) {
    this.classService.getCurrentClass()
      .subscribe(currentClass => this.currentClass = currentClass);
  }
}
