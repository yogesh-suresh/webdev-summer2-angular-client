export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch('https://safe-falls-17862.herokuapp.com/api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
