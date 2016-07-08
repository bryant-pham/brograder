import { it, describe, expect } from '@angular/core/testing';

import { Teacher } from './teacher.model';

describe('Teacher', () => {
  it('should create Teacher from json', () => {
    let json = {
      id: '1',
      firstName: 'Coobie',
      lastName: 'McCooberson',
      email: 'derp@gmail.com'
    };

    let result = Teacher.from(json);

    expect(result.id).toEqual('1');
    expect(result.firstName).toEqual('Coobie');
    expect(result.lastName).toEqual('McCooberson');
    expect(result.email).toEqual('derp@gmail.com');
  });
});
