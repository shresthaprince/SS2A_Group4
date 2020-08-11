import http from "./httpServices";

export function getStudents() {
  return http.get("http://localhost:3000/api/students");
}
