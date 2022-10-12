const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr.length===0) return []

  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');

  let newArr=[] 
  
//   let deepArr = cloneArray(arr);

// function cloneArray(arr) {
//   var result = [];
//   arr.forEach(function(value) {
//     var arr_elem = {};
//     for (var prop in value) 
//       arr_elem[prop] = value[prop];
//     result.push(arr_elem);
//   });
//   return result;
// }


  for (let i=0; i<arr.length;i++){
    if (arr[i]=='--double-next') {
      newArr.push[arr[i+1]]
    } else if (arr[i]=='--double-next') {
      newArr.push[arr[i-1]]
    } else if (arr[i]=='--discard-prev') {
      newArr.pop[arr[i-1]]
    } else if (arr[i]=='--discard-next') {
      newArr.pop[arr[i+1]]
    } else {
      newArr.push[arr[i]]
    }
  }
  return newArr

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
