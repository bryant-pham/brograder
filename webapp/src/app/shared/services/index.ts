import { AssignmentService } from './assignment.service';
import { HttpService } from './http.service';
import { AuthenticationService } from './authentication.service';
import { TeacherService } from './teacher.service';
import { StudentService } from './student.service';
import { ClassService } from './class.service';

export * from './assignment.service';
export * from './class.service';
export * from './student.service';
export * from './teacher.service';
export * from './http.service';
export * from './authentication.service';

export const SERVICE_PROVIDERS = [
  AssignmentService,
  ClassService,
  StudentService,
  TeacherService,
  HttpService,
  AuthenticationService
];
