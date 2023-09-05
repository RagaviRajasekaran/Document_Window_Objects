// Using an anonymous function

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];

const oddNumbers = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

oddNumbers(x);

console.log("\n");

// Using an IIFE (Immediately Invoked Function Expression)
(function() {
  const args = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < args.length; i++) {
    if (args[i] % 2 !== 0) {
      console.log(args[i]);
    }
  }
})();