export interface TeacherJsonResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  classes: Array<string>;
}

export class Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  classes: Array<string>;

  static from(json: TeacherJsonResponse) {
    return new Teacher(json.id, json.firstName, json.lastName, json.email, json.classes);
  }

  constructor(id: string, firstName: string, lastName: string, email: string, classes: Array<string>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.classes = classes;
  }
}

export module Teacher {
  export class Builder {
    id = '1';
    firstName = 'Coobie';
    lastName = 'McCooberson';
    email = 'cmccoob@gmail.com';
    classes = [];

    withId(id: string): Builder {
      this.id = id;
      return this;
    }

    withFirstName(firstName: string): Builder {
      this.firstName = firstName;
      return this;
    }

    withLastName(lastName: string): Builder {
      this.lastName = lastName;
      return this;
    }

    withEmail(email: string): Builder {
      this.email = email;
      return this;
    }

    withClasses(classes: Array<string>) {
      this.classes = classes;
      return this;
    }

    build(): Teacher {
      return new Teacher(this.id, this.firstName, this.lastName, this.email, this.classes);
    }
  }
}
