import http from "./httpServices";

export function getCourses() {
  return http.get("http://localhost:3000/api/courses");
}
