export default function getListStudentIds(students) {
  if (students.constructor !== Array) {
    return [];
  }

  return students.map((students) => students.id);
}
