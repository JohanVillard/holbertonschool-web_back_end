export default function (students, city, newGrades) {
  const studentsByCity = students.filter((students) => city === students.location);

  const studentsWithGrade = studentsByCity.map((student) => {
    const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeInfo ? gradeInfo.grade : 'N/A',
    };
  });

  return studentsWithGrade;
}
