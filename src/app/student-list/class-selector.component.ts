import { Component, Output, EventEmitter } from '@angular/core';

import { TeacherService } from '../shared/services';
import { DropdownMenuComponent } from '../shared/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'bro-class-selector',
  template: require('./class-selector.html'),
  providers: [ TeacherService ],
  directives: [ DropdownMenuComponent ]
})
export class ClassSelectorComponent {
  classes: Array<string>;
  @Output() selected = new EventEmitter();

  constructor(private teacherService: TeacherService) {
    this.teacherService.getTeacher()
      .subscribe(teacher => this.classes = teacher.classes);
  }

  handleClassSelect(selectionEvent): void {
    this.selected.emit(selectionEvent);
  }
}
