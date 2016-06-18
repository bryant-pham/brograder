import { GradedAssignment } from './gradedAssignment.model';

export class Student {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  gradedAssignments: Map<string, GradedAssignment>;

  constructor(firstName: string, lastName: string, id?: string, teacherId?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradedAssignments = new Map<string, GradedAssignment>();
    this.id = id;
    this.teacherId = teacherId;
  }

  addGradedAssignment(gradedAssignment: GradedAssignment) {
    this.gradedAssignments.set(gradedAssignment.getId(), gradedAssignment);
  }
}
