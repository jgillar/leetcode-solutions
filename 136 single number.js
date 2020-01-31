/**
 * @param {number[]} nums
 * @return {number}
 */

let singleNumber = function(nums) {
  //I wrote up a proof of why this works and it's too long to put here in comments
  //basically you can just 'solve' for the unique element by expressing it as a combination
  //of sums of the elements since we can compute those in linear time
  let sum = getSum(nums);
  return 2 * getSum(Array.from(new Set(nums))) - sum;
};

let getSum = arr => {
  return arr.reduce((el, sum) => {
    return el + sum;
  });
};
