const countDown = (n) => {
  //   console.log(n);
  n--;
  if (n > 0) {
    countDown(n);
  }
};
countDown(10);

const sumOffAll = (n) => {
  //   let sum = 0;
  //   let pre = n;
  //   n--;
  //   let s = n + pre;
  //   sum += s;

  //   if (n > 0) {
  //     console.log(n);
  //     sumOffAll(n);
  //   }
  //   return sum;
  if (n < 0) return 0;
  return n + sumOffAll(n - 1);
};
// console.log(sumOffAll(5));

const findOddNumber = (arr) => {
  let result = [];
  const helper = (input) => {
    if (input.length === 0) return [];
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  };

  helper(arr);

  return result;
};
findOddNumber([3, 4, 5, 67, 7, 9, 25]);
console.log(findOddNumber([3, 4, 5, 67, 7, 9, 25]));
