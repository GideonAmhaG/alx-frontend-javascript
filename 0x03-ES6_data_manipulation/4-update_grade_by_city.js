export default function getStudentsByLocation(array, city, newGrade) {
  return array
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeItem = newGrade
        .filter((item) => item.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeItem || 'N/A';
      return { ...student, grade };
    });
}
