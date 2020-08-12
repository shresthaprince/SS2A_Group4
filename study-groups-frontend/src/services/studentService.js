import http from "./httpServices";

const apiEndpoint = "/students";

export function getStudents() {
  return http.get(apiEndpoint);
}
