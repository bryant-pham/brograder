import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { StudentProfileListComponent } from '../student-profile-list/student-profile-list.component';
import { GradeStudentListComponent } from '../grade-student-list/grade-student-list.component';
import { QuestionViewComponent } from '../question-view/question-view.component';
import { AssignmentListComponent } from '../assignment-list/assignment-list.component';
import { HomeComponent } from '../home/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'assignments', component: AssignmentListComponent },
  { path: 'questions', component: QuestionViewComponent },
  { path: 'gradeStudent', component: GradeStudentListComponent },
  { path: 'class', component: StudentProfileListComponent },
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
