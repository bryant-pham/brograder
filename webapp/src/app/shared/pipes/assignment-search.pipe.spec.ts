import { describe, it } from '@angular/core/testing';

import { AssignmentSearchPipe } from './assignment-search.pipe';
import { Assignment } from '../models/assignment.model';

describe('AssignmentSearchPipe', () => {
  let pipe = new AssignmentSearchPipe();

  let assignments: Array<Assignment> = Assignment.Builder
    .buildAssignments('math', 'READING');

  it('should return results with exact match of search term' +
    'where search value is all lowercase', () => {
    let results = pipe.transform(assignments, 'math');

    expect(results[0].name).toBe('math');
    expect(results.length).toBe(1);
  });

  it('should return results with exact match of search term case insensitive' +
    'where search value is all lowercase', () => {
    let results = pipe.transform(assignments, 'MATH');

    expect(results[0].name).toBe('math');
    expect(results.length).toBe(1);
  });

  it('should return results that contain search term where value is all lowercase', () => {
    let results = pipe.transform(assignments, 'at');

    expect(results[0].name).toBe('math');
    expect(results.length).toBe(1);
  });

  it('should return results that contain search term case insensitive' +
    'where search value is all lowercase', () => {
    let results = pipe.transform(assignments, 'AT');

    expect(results[0].name).toBe('math');
    expect(results.length).toBe(1);
  });

  it('should return results that exact match search term where search value is all caps', () => {
    let results = pipe.transform(assignments, 'READING');

    expect(results[0].name).toBe('READING');
    expect(results.length).toBe(1);
  });

  it('should return results that exact match search term case insensitive' +
    'where search value is all caps', () => {
    let results = pipe.transform(assignments, 'reading');

    expect(results[0].name).toBe('READING');
    expect(results.length).toBe(1);
  });

  it('should return results that contain search term where search value is all caps', () => {
    let results = pipe.transform(assignments, 'READ');

    expect(results[0].name).toBe('READING');
    expect(results.length).toBe(1);
  });

  it('should return results that contain search term case insensitive' +
    'where search value is all caps', () => {
    let results = pipe.transform(assignments, 'read');

    expect(results[0].name).toBe('READING');
    expect(results.length).toBe(1);
  });

  it('should return all results when search term is empty string', () => {
    let results = pipe.transform(assignments, '');

    expect(results[0].name).toBe('math');
    expect(results[1].name).toBe('READING');
    expect(results.length).toBe(2);
  });

  it('should return all results when search term is undefined', () => {
    let results = pipe.transform(assignments, undefined);

    expect(results[0].name).toBe('math');
    expect(results[1].name).toBe('READING');
    expect(results.length).toBe(2);
  });
});
