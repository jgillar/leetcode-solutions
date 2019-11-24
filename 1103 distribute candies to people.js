/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let arr = new Array(num_people);
  arr.fill(0);
  let sumCandies = 0;

  for (let x = 0; x < candies; x++) {
    sumCandies += x;
    if (sumCandies + x + 1 >= candies) {
      arr[x % num_people] += candies - sumCandies;
      break;
    } else arr[x % num_people] += x + 1;
  }

  return arr;
};
