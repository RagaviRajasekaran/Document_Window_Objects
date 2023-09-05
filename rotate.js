const array = [1, 2, 3, 4, 5];
const abc = 3;
// Using an anonymous function
const rotateArray = function(arr, abc) {
   
  for (let i = 0; i < abc; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  return arr;
};

const rotatedArray = rotateArray(array, abc);
console.log(rotatedArray);

//Using an IIFE (Immediately Invoked Function Expression)
(function(arr, abc) {
    for (let i = 0; i < abc; i++) {
      const lastElement = arr.pop();
      arr.unshift(lastElement);
    }
    return arr;
  })(
  
  console.log(array))