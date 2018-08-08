export class ModuleServiceClient {
  MODULE_URL = 'https://safe-falls-17862.herokuapp.com//api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
