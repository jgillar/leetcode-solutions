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
  nums.forEach((num1, index1) => {
    nums.forEach((num2, index2) => {
      if (num1 + num2 === target) {
        result = [index1, index2];
        return;
      }
    });
  });

  return result;
};
