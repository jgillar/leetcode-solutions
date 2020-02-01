/**
 * @param {string} s
 * @return {number}
 */

//idea: we treat the string as numbers in base 26
let titleToNumber = function(s) {
  let str = s;
  let result = 0;
  let val = 0;
  let power = 0;
  while (str !== "") {
    //the Unicode value for A is 65 so we subtract 64 from s's value
    val = str.charAt(str.length - 1).charCodeAt(0) - 64;
    val *= Math.pow(26, power);
    result += val;
    power++;
    str = str.substring(0, str.length - 1);
  }

  return result;
};
