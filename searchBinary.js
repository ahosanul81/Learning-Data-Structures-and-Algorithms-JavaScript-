const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.round((start + end) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
let arr = Array.from({ length: 50000 }, (_, i) => i + 1);
// console.log(
//   binarySearch(
//     [3, 5, 7, 9, 10, 11, 13, 16, 18, 20, 21, 23, 25, 27, 30, 32, 34, 36],
//     23
//   )
// );
console.log(arr);
console.log(binarySearch(arr, 49000));
