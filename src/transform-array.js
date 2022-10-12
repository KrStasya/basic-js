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
function transform(/*arr*/) {
//   if (arr.length===0) return []

//   if (!Array.isArray(arr)) throw new NotImplementedError('\'arr\' parameter must be an instance of the Array!');

//   let newArr=[] 
  
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


//   for (let i=0; i<deepArr.length;i++){
//     if (deepArr[i]=='--double-next') {
//       newArr.push[deepArr[i+1]]
//     } else if (deepArr[i]=='--double-next') {
//       newArr.push[arr[i-1]]
//     } else if (deepArr[i]=='--discard-prev') {
//       newArr.pop[deepArr[i-1]]
//     } else if (deepArr[i]=='--discard-next') {
//       newArr.pop[deepArr[i+1]]
//     } else {
//       newArr.push[deepArr[i]]
//     }
//   }
//   return newArr

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
