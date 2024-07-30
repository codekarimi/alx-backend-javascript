export default function cleanSet(arr, startString) {
  if (startString === undefined || !startString.length || typeof startString !== 'string') return '';
  let ans = '';
  arr.forEach((x) => {
    if (x.startsWith(startString)) {
      ans += `${x.slice(startString.length)}-`;
    }
  });
  ans = ans.slice(0, ans.length - 1);
  return ans;
}
