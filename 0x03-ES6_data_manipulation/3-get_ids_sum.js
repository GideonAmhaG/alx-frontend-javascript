export default function getListStudentIds(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
