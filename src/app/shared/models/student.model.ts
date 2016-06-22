import { GradedAssignment } from './gradedAssignment.model';

export class Student {
  id: string;
  teacherId: string;
  firstName: string;
  lastName: string;
  gradedAssignments: Map<string, GradedAssignment>;
  className: string;

  constructor(id: string,
              teacherId: string,
              firstName: string,
              lastName: string,
              className: string,
              gradedAssignments?: Map<string, GradedAssignment>) {
    this.id = id;
    this.teacherId = teacherId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.className = className;

    if (gradedAssignments) {
      this.gradedAssignments = gradedAssignments;
    } else {
      this.gradedAssignments = new Map<string, GradedAssignment>();
    }
  }

  addGradedAssignment(gradedAssignment: GradedAssignment) {
    this.gradedAssignments.set(gradedAssignment.getId(), gradedAssignment);
  }
}

export module Student {
  export class Builder {
    id = '1';
    teacherId = '1';
    firstName = 'john';
    lastName = 'cena';
    gradedAssignments = new Map<string, GradedAssignment>();
    className: string;

    withId(id: string): Builder {
      this.id = id;
      return this;
    }

    withTeacherId(id: string): Builder {
      this.teacherId = id;
      return this;
    }

    withFirstName(name: string): Builder {
      this.firstName = name;
      return this;
    }

    withLastName(name: string): Builder {
      this.lastName = name;
      return this;
    }

    withClass(className: string): Builder {
      this.className = className;
      return this;
    }

    withAssignment(gradedAssignment: GradedAssignment): Builder {
      this.gradedAssignments.set(gradedAssignment.getId(), gradedAssignment);
      return this;
    }

    build(): Student {
      return new Student(
        this.id,
        this.teacherId,
        this.firstName,
        this.lastName,
        this.className,
        this.gradedAssignments);
    }
  }
}
