const array = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// Using an anonymous function
const removeDuplicates = function(arr) {
  const xArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!xArray.includes(arr[i])) {
        xArray.push(arr[i]);
    }
  }
  
  return xArray;
};

const result = removeDuplicates(array);
console.log(result);



//Using an IIFE (Immediately Invoked Function Expression)
const array1 = [1, 2, 2, 3, 4, 4, 5, 5, 6];

(function(arr) {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
})();

console.log(arr);



