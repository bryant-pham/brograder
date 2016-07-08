import { provideRouter, RouterConfig } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { StudentProfileListComponent } from '../student-profile-list/student-profile-list.component';
import { GradeStudentListComponent } from '../grade-student-list/grade-student-list.component';
import { QuestionViewComponent } from '../question-view/question-view.component';
import { AssignmentListComponent } from '../assignment-list/assignment-list.component';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../guard/auth.guard';
import { AuthenticationService } from '../shared/services/authentication.service';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'assignments', component: AssignmentListComponent, canActivate: [AuthGuard] },
  { path: 'questions', component: QuestionViewComponent, canActivate: [AuthGuard] },
  { path: 'gradeStudent', component: GradeStudentListComponent, canActivate: [AuthGuard] },
  { path: 'class', component: StudentProfileListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard,
  AuthenticationService
];
