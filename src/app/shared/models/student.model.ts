import { GradedAssignment } from './gradedAssignment.model';

export class Student {
  id: string;
  firstName: string;
  lastName: string;
  gradedAssignments: Map<string, GradedAssignment>;

  constructor(firstName: string, lastName: string, id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradedAssignments = new Map<string, GradedAssignment>();
    this.id = id;
  }

  addGradedAssignment(gradedAssignment: GradedAssignment) {
    this.gradedAssignments.set(gradedAssignment.getId(), gradedAssignment);
  }
}
