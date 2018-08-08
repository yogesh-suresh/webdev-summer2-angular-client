export class TopicServiceClient {
  findTopicsForLesson(lessonId, moduleId, courseId) {
    return fetch('https://safe-falls-17862.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
