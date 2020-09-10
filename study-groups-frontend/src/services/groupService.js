import http from "./httpServices";

const apiEndpoint = "/groups";

export function getGroups() {
  return http.get(apiEndpoint);
}

export function createGroup(group) {
  return http.post(`${apiEndpoint}`, group);
}

export function createGroups() {
  return http.post(`${apiEndpoint}/new`);
}

export function updateGroup(group) {
  const { _id, __v, __proto__, students, ...rest } = group;
  return http.put(`${apiEndpoint}/${_id}`, rest);
}

export function resetGroups() {
  return http.delete(apiEndpoint);
}
