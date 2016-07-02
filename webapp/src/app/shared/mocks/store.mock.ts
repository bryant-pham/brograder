import { Injectable } from '@angular/core';

/*
 * This class is meant to be used in tests to mock the Store class.
 * Use Jasmine's spyOn operator to mock return values for these methods.
 * */

@Injectable()
export class StoreMock {
  dispatch(): void {
    // no op
  }

  select(): void {
    // no op
  }
}
