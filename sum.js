// Using an anonymous function
let sumOfnumber = function() {
    let x = [1, 2, 3, 4, 5];
let sum=0;
  for(i=0;i<x.length;i++){
    sum+= x[i];
  }
  console.log(sum);
};

sumOfnumber();


//Using an IIFE (Immediately Invoked Function Expression)

(function() {
    let y = [1, 2, 3, 4, 5];
let sum=0;
  for(let i=0;i<y.length;i++){
    sum+= y[i];
  }
  console.log(sum);
})();