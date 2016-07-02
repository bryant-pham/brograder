import { Assignment, Class, Student, Teacher } from '../models';

export interface AppStore {
  CURRENT_ASSIGNMENT: Assignment;
  ASSIGNMENTS: Array<Assignment>;
  CURRENT_CLASS: string;
  All_CLASSES: Array<Class>;
  CURRENT_STUDENT: Student;
  TEACHER: Teacher;
  AUTHENTICATION: boolean;
}
