const sevenBoom = arr => /7/.test(arr) ? 'Boom!' : 'There is no 7 in the array';

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 6])); //Boom 

const getLength = arr => arr.flat(Infinity).length;

console.log(getLength([1, [2, [4, [5, 6]]]])) // 6