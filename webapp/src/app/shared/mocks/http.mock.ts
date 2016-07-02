import { Injectable } from '@angular/core';

/*
* This class is meant to be used in tests to mock the Http class.
* Use Jasmine's spyOn operator to mock return values for these methods.
* */

@Injectable()
export class HttpMock {
  get(): void {
    // no op
  }

  post(): void {
    // no op
  }
}
