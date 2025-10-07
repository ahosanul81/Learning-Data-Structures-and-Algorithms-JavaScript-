const twoSums = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return false;
};

// console.log(twoSums([2, 7, 8], 9));

// optimized by algorith
const twoSumsOptimized = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (remaining === nums[j]) return [i, j];
    }
  }
  return false;
};
// time complexity Big O(n^2)
// space complexity Big O(1)

// console.log(twoSumsOptimized([2, 7, 8], 9));

const twoSumsOptimized2 = (nums, target) => {
  const map = {}; // store value:index
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (map[remaining] !== undefined) {
      return [map[remaining], i]; // যদি already remaining থাকে, solution পাওয়া যাবে
    }
    map[nums[i]] = i; // current number কে map এ রাখলাম
  }
  return false;
};

console.log(twoSumsOptimized2([2, 7, 8], 9)); // [0,1]
