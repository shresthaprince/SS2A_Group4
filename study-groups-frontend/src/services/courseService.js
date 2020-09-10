import http from "./httpServices";

const apiEndpoint = "/courses";

export function getCourses() {
  return http.get(apiEndpoint);
}
