import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Course} from '../models/course.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private router: Router,
              private sectionService: SectionServiceClient,
              private userService: UserServiceClient,
              private service: CourseServiceClient) {
    this.findEnrolledCourses = this.findEnrolledCourses.bind(this);
  }

  courses: Course[] = [];
  enrolledCourses: Course[] = [];
  logged= false;
  enrolledSections =[];

  findEnrolledCourses () {

    this.enrolledSections.forEach((section) => {

      this.service.findCourseById(section.section.courseId)
        .then(course => {
          this.enrolledCourses.push(course);
        });

    });
  }

  logout() {
    this.userService
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  enroll(courseId){
    if(this.logged){
      this.router.navigate(['course/' + courseId + '/enroll']);
    }
    else {
      this.router.navigate(['login']);
    }

  }


  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);


    this.userService.profile()
      .then(res => {
          return res._id;
        }
      ).then(userId => {
      if (userId !== null) {
        this.logged = true;
        this.sectionService
          .findSectionsForStudent()
          .then(sections =>
            this.enrolledSections = sections)
          .then(this.findEnrolledCourses);
      }
    });
  }

}
