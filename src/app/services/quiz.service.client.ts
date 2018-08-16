export class QuizServiceClient {

  loadSubmissions(quizId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/quiz/' + quizId + '/submissions')
      .then(response => response.json());
  }

  submitQuiz(sub,quiz,sId) {
    const submission ={
      quiz: quiz,
      student: sId
      answers: sub
    };
    console.log(submission);
    return fetch('https://secure-coast-10881.herokuapp.com/api/quiz/' + quiz._id + '/submission',{
      method: 'post',
      body: JSON.stringify(submission),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
  findQuizById(quizId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/quiz/' + quizId)
      .then(response => response.json());
  }

  findSubmissionById(quizId,studentId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/quiz/' + quizId + '/submissions/' + studentId)
      .then(response => response.json());
  }

  findSubmission(subId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/submission/' + subId)
      .then(response => response.json());
  }

  findQuestionById(qId) {
    return fetch('https://secure-coast-10881.herokuapp.com/api/question/' + qId)
      .then(response => response.json());
  }
  findAllQuizzes() {
    return fetch('https://secure-coast-10881.herokuapp.com/api/quiz')
      .then(response => response.json());
  }
}
