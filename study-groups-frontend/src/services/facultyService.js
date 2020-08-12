import http from "./httpServices";

const apiEndpoint = "/faculties";

export function getFaculties() {
  return http.get(apiEndpoint);
}
