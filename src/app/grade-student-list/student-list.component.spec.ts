import {
  beforeEachProviders,
  describe,
  injectAsync,
  xit,
  expect
} from '@angular/core/testing';
import { PLATFORM_DIRECTIVES, provide, Component } from '@angular/core';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Observable } from 'rxjs/Observable';
import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';

import { StudentListComponent } from './student-list.component';
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

describe('StudentListComponent', () => {
  beforeEachProviders(() => [
    TestComponentBuilder,
    ROUTER_FAKE_PROVIDERS,
    {provide: PLATFORM_DIRECTIVES, multi: true, useValue: ROUTER_DIRECTIVES}
  ]);

  let fixture: ComponentFixture;

  beforeEach(injectAsync([TestComponentBuilder], tcb => {
    tcb.overrideProviders(StudentListComponent, [
      provide(StudentService, {useClass: MockService}),
      provide(TeacherService, {useClass: MockService})
    ])
      .overrideDirective(StudentListComponent, ClassSelectorComponent, MockComponent)
      .createAsync(StudentListComponent).then(fix => {
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
