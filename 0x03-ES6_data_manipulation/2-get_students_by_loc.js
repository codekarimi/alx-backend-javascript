export default function getStudentsByLocation(arr, city) {
  return arr.filter((arr) => arr.location === city);
}
