/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
  let result = [];
  let arr = [];

  return permuteHelper(nums, arr, result);
};

let permuteHelper = function(choices, arr, result) {
  if (choices.length === 0) {
    result.push([...arr]);
  }

  for (let i = 0; i < choices.length; i++) {
    //remove current number from list of choices
    //reminder: since we're backtracking we can't directly modify the choices array in place
    //have to work with a copy
    let newChoices = [...choices.slice(0, i), ...choices.slice(i + 1)];
    //add current to current permutation we're building
    arr.push(choices[i]);

    permuteHelper(newChoices, arr, result);

    //when we 'backtrack' up the recursion tree we need to remove the last added number to the current permutation
    arr.pop();
  }

  return result;
};
