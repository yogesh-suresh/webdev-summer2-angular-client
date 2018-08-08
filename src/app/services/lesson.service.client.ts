export class LessonServiceClient {
  findLessonsForModule(moduleId,courseId) {
    console.log("In lesson service client:"+moduleId);
    console.log("In lesson service client:"+courseId);
    return fetch('https://safe-falls-17862.herokuapp.com/api/course/'+ courseId+ '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
