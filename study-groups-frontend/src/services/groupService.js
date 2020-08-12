import http from "./httpServices";

const apiEndpoint = "/groups";

export function getGroups() {
  return http.get(apiEndpoint);
}

export function createGroups() {
  return http.post(`${apiEndpoint}/new`);
}

export function resetGroups() {
  return http.delete(apiEndpoint);
}
