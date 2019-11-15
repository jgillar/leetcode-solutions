/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  let result = null;

  //the inner loop does not need to iterate over the numbers already iterated over in the outer loop
  for (let index1 = 0; index1 < nums.length; index1++) {
    for (let index2 = index1 + 1; index2 < nums.length; index2++) {
      if (nums[index1] + nums[index2] === target) {
        return [index1, index2];
        break;
      }
    }
  }
  return result;
};
