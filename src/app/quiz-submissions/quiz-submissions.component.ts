import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private service: QuizServiceClient,
              private aRoute: ActivatedRoute) {
    this.aRoute.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  quizId = '';
  submissions = [];
  selectUsername = '';
  studentId = ''
  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.userService.profile()
      .then(user => {
        if (user === null) {
          alert('Session timed out');
           this.router.navigate(['login']);
        } else if(user.username == 'admin')
        {
          console.log('admin here');
           this.service.loadSubmissions(this.quizId)
                .then(submissions => { console.log(submissions);
                  this.submissions = submissions})
        }
        else { this.studentId = user._id;
                this.service.findSubmissionById(this.quizId,this.studentId)
                .then(submissions => { console.log(submissions);
                  this.submissions = submissions});
        }
       }
  }

  ngOnInit() {
  }
}
