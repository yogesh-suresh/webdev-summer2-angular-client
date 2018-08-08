export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://safe-falls-17862.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('https://safe-falls-17862.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
