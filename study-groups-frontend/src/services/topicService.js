import http from "./httpServices";

const apiEndpoint = "/topics";

export function getTopics() {
  return http.get(apiEndpoint);
}

export function addTopic(topic) {
  return http.post(apiEndpoint, topic);
}

export function removeTopic(topicId) {
  return http.delete(`${apiEndpoint}/${topicId}`);
}
