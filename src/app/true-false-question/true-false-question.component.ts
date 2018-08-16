import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input() question;

  constructor() { }

  selected = trueOrFalse => {
    this.question.trueFalseAnswer  = trueOrFalse;
  }
  ngOnInit() {
  }

}
