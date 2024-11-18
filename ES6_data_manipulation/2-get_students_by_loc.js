export default function getStudentByLocation(students, city) {
  return students.filter((students) => city === students.location);
}
