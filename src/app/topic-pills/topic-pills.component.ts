import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  constructor(private service: TopicServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  courseId;
  moduleId;
  lessonId;
  topicId;
  topics = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.topicId = params['topicId'];
    this.loadTopics(this.lessonId,this.moduleId,this.courseId,);
  }

  loadTopics(lessonId,moduleId,courseId) {
    this.moduleId = moduleId;
    this.courseId= courseId;
    this.lessonId = lessonId;

    this.service.findTopicsForLesson(lessonId,moduleId,courseId)
      .then(topics => this.topics = topics);
  }
  ngOnInit() {
  }

}
