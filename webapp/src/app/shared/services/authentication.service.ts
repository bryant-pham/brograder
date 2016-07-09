import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppStore } from '../reducers/app.store';
import { AUTHENTICATION, AUTHENTICATED } from '../reducers';
import { BrograderServiceUriBuilder } from '../uribuilder';
import { Teacher, TeacherJsonResponse } from '../models';
import { HttpService } from './http.service';
import { TeacherService } from './teacher.service';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpService,
              private store: Store<AppStore>,
              private uriBuilder: BrograderServiceUriBuilder,
              private teacherService: TeacherService) {
  }

  authenticate(googleUser): void {
    let idToken = googleUser.getAuthResponse().id_token;
    let uri = this.uriBuilder.authenticate();
    this.http.post(uri, {idToken: idToken})
      .subscribe((teacherJson: TeacherJsonResponse) => {
        this.store.dispatch({type: AUTHENTICATED});
        this.setTeacherUser(teacherJson);
      });
  }

  authenticationStream(): Observable<boolean> {
    return <Observable<boolean>> this.store.select(AUTHENTICATION);
  }

  private setTeacherUser(teacherJsonResponse: TeacherJsonResponse): void {
    let teacher = Teacher.from(teacherJsonResponse);
    this.teacherService.setTeacher(teacher);
  }
}
