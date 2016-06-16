import { GradedAssignment } from './gradedAssignment.model';

export class Student {
  firstName: string;
  lastName: string;
  gradedAssignments: Map<string, GradedAssignment>;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradedAssignments = [];
    this.gradedAssignments = new Map<string, GradedAssignment>();
  }

  addGradedAssignment(gradedAssignment: GradedAssignment) {
    this.gradedAssignments.set(gradedAssignment.getId(), gradedAssignment);
  }
}
