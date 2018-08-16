import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient,
              private service: QuizServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute
      .params
      .subscribe(params => this.loadSubmission(params['quizId'],params['submissionId']));
  }

  studentId = '';
  quizId = '';
  quiz = {"title" : '',
          "questions":[]
  };
  submission = {};
  questions ={};
  loadSubmission(quizId,submissionId) {
    console.log(submissionId);
    this.quizId = quizId;
    this.service
      .findQuizById(quizId)
      .then(quiz => {
      console.log(quiz);
      this.quiz = quiz});
  }





  ngOnInit() {
  }

}
