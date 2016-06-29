import {
  beforeEachProviders,
  describe,
  injectAsync,
  xit,
  expect,
  beforeEach
} from '@angular/core/testing';
import { PLATFORM_DIRECTIVES, provide, Component } from '@angular/core';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Observable } from 'rxjs/Observable';

import { GradeStudentListComponent } from './grade-student-list.component';
import { StudentService, TeacherService } from '../shared/services';
import { Student } from '../shared/models';
import { ClassSelectorComponent } from './class-selector.component';

class MockService {
  getStudents() {
    return new Observable();
  }
}

@Component({ template: '' })
class MockComponent {}

describe('GradeStudentListComponent', () => {
  beforeEachProviders(() => [
    TestComponentBuilder,
    {provide: PLATFORM_DIRECTIVES, multi: true, useValue: ROUTER_DIRECTIVES}
  ]);

  let fixture: ComponentFixture<GradeStudentListComponent>;

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    tcb.overrideProviders(GradeStudentListComponent, [
      provide(StudentService, {useClass: MockService}),
      provide(TeacherService, {useClass: MockService})
    ])
      .overrideDirective(ClassSelectorComponent, MockComponent)
      .createAsync(GradeStudentListComponent).then(fix => {
      fixture = fix;
    });
  }));

  xit('should list students', () => {
    fixture.componentInstance.students = [
      new Student.Builder().build()
    ];
    fixture.detectChanges();
    console.log(fixture.nativeElement);
    expect(fixture.nativeElement).toBeDefined();
  });
});
