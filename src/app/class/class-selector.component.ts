import { Component } from '@angular/core';

import { Class } from "../shared/models";
import { ClassService } from "../shared/services/class.service.ts";

@Component({
  selector: 'bro-class-selector',
  template: require('./class-selector.html'),
  providers: [ ClassService ]
})
export class ClassSelectorComponent {
  classes: Array<Class>;

  constructor(private classService: ClassService) {
    this.classService.getAllClasses()
      .subscribe(classes => this.classes = classes);
  }
}
