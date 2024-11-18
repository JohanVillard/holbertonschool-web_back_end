export default function (students) {
  const initialValue = 0;
  const sum = students.reduce((accumulator, student) => accumulator + student.id, initialValue);

  return sum;
}
