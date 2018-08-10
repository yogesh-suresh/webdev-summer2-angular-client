import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Section} from '../models/section.model.client';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-admin-section-control',
  templateUrl: './admin-section-control.component.html',
  styleUrls: ['./admin-section-control.component.css']
})
export class AdminSectionControlComponent implements OnInit {

  constructor(private userservice: UserServiceClient,
              private courseservice: CourseServiceClient,
              private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  sectionName = '';
  maxSeats = '';
  seats = '';
  courseId = '';
  course;
  sections = [];
  selectedSection :Section;
  loadSections(courseId) {
    this.courseId = courseId;
    this.courseservice.findCourseById(this.courseId)
      .then(course=>this.course=course);
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections).then(() => {this.sectionName = "";
      this.maxSeats = "";});
  }

  deleteSection(sectionId) {
    this
      .service
      .deleteSection(sectionId)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  createSection(sectionName, maxSeats) {
    this
      .service
      .createSection(this.courseId, sectionName, maxSeats)
      .then(() => {
        this.loadSections(this.courseId);
      }).then(() => {this.sectionName = "";
      this.maxSeats = ""; this.seats = "";});
  }

  updateSection(newName, newSeats) {
    const newRem = newSeats - this.selectedSection.maxSeats + this.selectedSection.seats;
    this
      .service
      .updateSection(this.selectedSection._id, newName, newSeats, newRem)
      .then(() => {
        this.loadSections(this.courseId);
      }).then(() => {this.sectionName="";
      this.maxSeats="";  this.seats = ""; });
  }

  editSection(section) {
    this.sectionName = section.name;
    this.maxSeats = section.maxSeats;
    this.seats = section.seats;
    this.selectedSection = section;
  }

  logout() {
    this.userservice
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }


  ngOnInit() {
  }
}
