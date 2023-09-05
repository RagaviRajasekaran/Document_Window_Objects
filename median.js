// Using an anonymous function
const median = function(a, b) {

    let x = [...a, ...b].sort((a, b) => a - b);
    

    const y = x.length / 2 | 0;
    
   
    if (x.length % 2) return x[y];
    
 
    return (x[y] + x[y - 1]) / 2;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

//Using an IIFE (Immediately Invoked Function Expression)
const a = [1, 12, 15, 26, 38];
const b = [2, 13, 17, 30, 45, 47];

(function(a, b) {
  let abc = [...a, ...b].sort((a, b) => a - b);
  const med = abc.length / 2 | 0;

  if (abc.length % 2) {
    console.log(abc[med]);
  } else {
    console.log((abc[med] + abc[med - 1]) / 2);
  }
})(a, b);