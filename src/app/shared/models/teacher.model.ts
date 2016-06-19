export class Teacher {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

export module Teacher {
  export class Builder {
    id = '1';

    withId(id: string): Builder {
      this.id = id;
      return this;
    }

    build(): Teacher {
      return new Teacher(this.id);
    }
  }
}
