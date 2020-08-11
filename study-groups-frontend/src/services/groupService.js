import http from "./httpServices";

export function getGroups() {
  return http.get("http://localhost:3000/api/groups");
}

export function createGroups() {
  return http.post("http://localhost:3000/api/groups/new");
}

export function resetGroups() {
  return http.delete("http://localhost:3000/api/groups");
}
