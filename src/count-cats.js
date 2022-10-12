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
  let cats=0;
    let catsline=matrix.reduce((acc, val) => acc.concat(val), [])
    matrix.length
    for (let i=0;i<catsline.length;i++) {
      if (catsline[i]=='^^') {
        cats=cats+1
      }
    }
    return cats
  //throw new NotImplementedError('Not implemented');
 
}

module.exports = {
  countCats
};
