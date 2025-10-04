const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
};
let arr = Array.from({ length: 50000 }, (_, i) => i + 1);
// console.log(linearSearch([12, 3, 5, 7, 8], 8));
console.log(linearSearch(arr, 49000));
