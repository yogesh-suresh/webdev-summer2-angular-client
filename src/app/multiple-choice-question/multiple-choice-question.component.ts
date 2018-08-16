import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question;

  constructor() { }

  selected = choice => {
  this.question.multipleChoiceAnswer = this.question.choices.indexOf(choice);
  }

  ngOnInit() {
  }

}
