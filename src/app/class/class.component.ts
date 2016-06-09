import { Component, Input } from '@angular/core';

import { Class } from '../shared/models';
import { ClassService } from '../shared/services/class.service.ts';
import { ClassSelectorComponent } from './class-selector.component';

@Component({
  selector: 'bro-class',
  template: require('./class.html'),
  styles: [ require('../shared/styles/shared.css') ],
  providers: [ ClassService ],
  directives: [ ClassSelectorComponent ]
})
export class ClassComponent {
  @Input() route: string;
  currentClass: Class;

  constructor(private classService: ClassService) {
    this.classService.getCurrentClass()
      .subscribe(currentClass => this.currentClass = currentClass);
  }
}
