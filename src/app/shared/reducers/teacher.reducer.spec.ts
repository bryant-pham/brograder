import { describe, it, expect } from '@angular/core/testing';

import { Teacher } from '../models/teacher.model';
import { teacherReducer, SET_TEACHER } from './teacher.reducer';

describe('teacherReducer', () => {
  it('should set teacher', () => {
    let payload = new Teacher.Builder().withId('2').build();

    let state = teacherReducer(undefined, {type: SET_TEACHER, payload: payload});

    expect(state).toEqual(payload);
  });

  it('perform no operation if invalid reducer operation', () => {
    let orig = new Teacher.Builder().build();
    let payload = new Teacher.Builder().withId('2').build();

    let state = teacherReducer(orig, {type: 'INVALID OPERATION', payload: payload});

    expect(state).toEqual(orig);
  });
});
