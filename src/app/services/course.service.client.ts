import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses() {

    return fetch('https://safe-falls-17862.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch('https://safe-falls-17862.herokuapp.com/api/course' + '/' + courseId)
      .then(response => response.json());
  }
}
