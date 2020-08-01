import http from "./httpServices";

export function getFaculties() {
  return http.get("http://localhost:3000/api/faculties");
}
