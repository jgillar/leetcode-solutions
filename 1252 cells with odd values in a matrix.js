/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let arr = [];
  let numOdd = 0;

  //set up array
  for (let x = 0; x < n; x++) {
    arr.push(new Array(m));
    arr[x].fill(0);
  }

  for (let l = 0; l < indices.length; l++) {
    //increment everything in the requested row
    for (let i = 0; i < m; i++) {
      let index = arr[indices[l][0]][i]++;
      //remember that z++ returns z, not z+1
      if ((index + 1) % 2 === 0) {
        numOdd--;
      } else {
        numOdd++;
      }
    }
    //increment everything in the requested column
    for (let j = 0; j < n; j++) {
      let index = arr[j][indices[l][1]]++;
      if ((index + 1) % 2 === 0) {
        numOdd--;
      } else {
        numOdd++;
      }
    }
  }

  return numOdd;
};
