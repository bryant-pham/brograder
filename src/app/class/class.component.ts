import { Component } from '@angular/core';

import { Class, Student } from "../shared/models";

@Component({
  selector: 'bro-class',
  template: require('./class.html')
})
export class ClassComponent {
  studentClass: Class;
  
  constructor() {
    this.studentClass = new Class([
      new Student('John', 'Cena'),
      new Student('Novak', 'Djokovic'),
      new Student('Andy', 'Murray')
    ])
  }
}
