// Using an arrow function

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];

const oddNumbers = (arr) =>{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
};

oddNumbers(x);

