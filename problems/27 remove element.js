/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

//idea: have a pointer lagging behind in the loop that counts the valid numbers in the array
//'rebuild' the array in place as we go but skip the invalid number
var removeElement = function(nums, val) {
  let lag = 0;

  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === val) {
      continue;
    } else {
      nums[lag] = nums[x];
      lag++;
    }
  }

  //this is different than my solution submitted to leetcode
  //for that, I simply did
  //return lag;
  return nums;
};
