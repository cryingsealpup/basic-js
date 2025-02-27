const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, curr) => {
    const total = curr.reduce((acc, curr) => {
      return curr === '^^' ? acc + 1 : acc;
    }, 0);
    return acc + total;
  }, 0)
}

module.exports = {
  countCats
};
