/**
 * @param {string} j
 * @param {string} s
 * @return {number}
 */
let numJewelsInStones = function(j, s) {
  let jewels = j.split("");
  let jewelCount = 0;
  let stones = s.split("");

  for (jewel of jewels) {
    //for efficiency purposes only
    if (stones.indexOf(jewel) === -1) {
      continue;
    }
    for (stone of stones) {
      if (jewel === stone) {
        jewelCount++;
      }
    }
  }

  return jewelCount;
};
