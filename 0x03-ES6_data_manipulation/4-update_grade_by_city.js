export default function updateStudentGradeByCity(students, city, newGrades) {
  const byCity = students.filter((x) => x.location === city);
  const newList = byCity.map((x) => {
    const updated = { ...x };
    const matchingGrade = newGrades.find((grade) => grade.studentId === x.id);
    if (matchingGrade) {
      updated.grade = matchingGrade.grade;
    } else {
      updated.grade = 'N/A';
    }
    return updated;
  });
  return newList;
}
