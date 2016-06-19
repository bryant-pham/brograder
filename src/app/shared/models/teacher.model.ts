export class Teacher {
  id: string;
  classes: Array<string>;

  constructor(id: string, classes: Array<string>) {
    this.id = id;
    this.classes = classes;
  }
}

export module Teacher {
  export class Builder {
    id = '1';
    classes = [];

    withId(id: string): Builder {
      this.id = id;
      return this;
    }

    withClasses(classes: Array<string>) {
      this.classes = classes;
      return this;
    }

    build(): Teacher {
      return new Teacher(this.id, this.classes);
    }
  }
}
