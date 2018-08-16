import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fill-blanks-question',
  templateUrl: './fill-blanks-question.component.html',
  styleUrls: ['./fill-blanks-question.component.css']
})
export class FillBlanksQuestionComponent implements OnInit {
  @Input() question;

  constructor() { }

  ngOnInit() {
    this.question.fillBlanksAnswer = {};
  }

}
