export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, curr) => acc + curr.id, 0);
}
