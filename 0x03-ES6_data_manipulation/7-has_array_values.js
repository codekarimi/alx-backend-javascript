export default function hasValuesFromArray(arr, values) {
  return values.every((x) => arr.has(x));
}
