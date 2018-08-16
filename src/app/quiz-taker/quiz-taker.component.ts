import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadQuiz(params['quizId']));
  }

  studentId = '';
  quizId = '';
  quiz = {};
  submission = {};
  loadQuiz(quizId) {
    this.quizId = quizId;
    this.service
      .findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
  }

  submit(submission) {
    this.userService.profile()
      .then(user => {
        if (user === null) {
          alert('Session timed out');
           this.router.navigate(['login']);
        } else {  console.log(submission.questions);
                  this.studentId = user._id;
                  this.service
                  .submitQuiz(submission.questions,this.quiz,this.studentId)
                  .then(sub => console.log(sub));
          }
    })
  }
  ngOnInit() {
  }

}
