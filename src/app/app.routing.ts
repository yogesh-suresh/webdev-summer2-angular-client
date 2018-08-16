import { Routes, RouterModule } from '@angular/router';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {SectionListComponent} from './section-list/section-list.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizTakerComponent} from './quiz-taker/quiz-taker.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';
import {QuizAnswersComponent} from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'course/:courseId/enroll', component: SectionListComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user-admin', component: AdminComponent},
  { path: 'admin-prof', component: AdminProfileComponent },
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz/:quizId', component: QuizTakerComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  {path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent},
  { path: 'course/:courseId/section', component: AdminComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'topic/:topicId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: '**', component: WhiteBoardComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
