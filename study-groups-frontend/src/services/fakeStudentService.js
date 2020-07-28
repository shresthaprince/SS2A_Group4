export const students = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Hey" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Hi" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Ho" },
];

export function getStudents() {
  return students.filter((student) => student);
}
