import { describe, it } from '@angular/core/testing';

import { Student } from '../models';
import { StudentClassSearchPipe } from './student-class-filter.pipe';

describe('StudentClassSearchPipe', () => {
  let pipe = new StudentClassSearchPipe();

  let jack = new Student.Builder().withFirstName('JACK').withClass('AM').build();
  let john = new Student.Builder().withFirstName('JOHN').withClass('PM').build();
  let students = [jack, john];

  it('should return results matching searchTerm', () => {
    let results = pipe.transform(students, 'PM');

    expect(results).toEqual([john]);
  });

  it('should return results matching searchTerm - case insensitive', () => {
    let results = pipe.transform(students, 'pm');

    expect(results).toEqual([john]);
  });

  it('should return empty results when none matching searchTerm', () => {
    let results = pipe.transform(students, 'ayy lmao');

    expect(results).toEqual([]);
  });

  it('should return all results if no searchTerm', () => {
    let results = pipe.transform(students, undefined);

    expect(results).toEqual([jack, john]);
  });
});
