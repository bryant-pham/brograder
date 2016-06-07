import { Component } from '@angular/core';

import { Class } from "../shared/models";
import { ClassService } from "../shared/services/class.service.ts";
import { DropdownMenuComponent } from "../shared/dropdown-menu/dropdown-menu.component";

@Component({
  selector: 'bro-class-selector',
  template: require('./class-selector.html'),
  providers: [ ClassService ],
  directives: [ DropdownMenuComponent ]
})
export class ClassSelectorComponent {
  classes: Array<Class>;

  constructor(private classService: ClassService) {
    this.classService.getAllClasses()
      .subscribe(classes => this.classes = classes);
  }

  handleClassSelect(event): void {
    this.classService.setCurrentClass(event.value);
  }
}
