/**
 * Convert a roman numeral to an integer.
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var sum = 0;
  var i = 0;

  while(i < s.length) {
    if (i + 1 < s.length && values[s[i]] < values[s[i+1]]) {
      // if next 3 are the same, then recursion
      if (i + 3 < s.length && s[i+1] === s[i+2] && s[i+1] === s[i+3]) {
        return sum + romanToInt(s[i+1] + s[i+2] + s[i+3]);
      }
      sum += (values[s[i+1]] - values[s[i]]);
      i+=2;
      continue;
    }
    sum += values[s[i]];
    i++;
  }
  return sum;
};

module.exports = romanToInt;
