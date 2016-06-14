import { GradedAssignment } from './gradedAssignment.model';

export class Student {
  firstName: string;
  lastName: string;
  gradedAssignments: Array<GradedAssignment>;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradedAssignments = [];
  }

  addGradedAssignment(gradedAssignment: GradedAssignment) {
    this.gradedAssignments.push(gradedAssignment);
  }
}
