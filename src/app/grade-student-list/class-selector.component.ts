import { Component, Output, EventEmitter } from '@angular/core';

import { TeacherService, ClassService } from '../shared/services';
import { DropdownMenuComponent } from '../shared/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'bro-class-selector',
  template: require('./class-selector.html'),
  providers: [ TeacherService, ClassService ],
  directives: [ DropdownMenuComponent ]
})
export class ClassSelectorComponent implements OnInit {
  classes: Array<string>;
  currentClass: string;
  @Output() selected = new EventEmitter();

  constructor(private teacherService: TeacherService,
              private classService: ClassService) {
  }

  ngOnInit() {
    this.teacherService.getTeacher()
      .subscribe(teacher => this.classes = teacher.classes);
    this.classService.getCurrentClass()
      .subscribe(currentClass => {
        this.currentClass = currentClass;
        this.selected.emit({value: this.currentClass});
      });
  }

  handleClassSelect(selectionEvent): void {
    this.classService.setCurrentClass(selectionEvent.value);
    this.selected.emit(selectionEvent);
  }
}
