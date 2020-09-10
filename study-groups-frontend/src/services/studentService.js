import http from "./httpServices";

const apiEndpoint = "/students";

export function getStudents() {
  return http.get(apiEndpoint);
}

export function updateAllocation(studentId) {
  return http.put(`${apiEndpoint}/${studentId}/allocated`);
}
