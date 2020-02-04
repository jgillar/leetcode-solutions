/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  let n1 = n - 1;
  let n2 = n - n1;

  //brute force
  //start at n and go backwards until neither summand contains a 0
  while (n1.toString().indexOf("0") != -1 || n2.toString().indexOf("0") != -1) {
    n1--;
    n2 = n - n1;
  }

  return [n1, n - n1];
};
