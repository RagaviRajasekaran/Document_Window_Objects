const words = ["level", "hello", "racecar", "world", "deified"];
// Using an anonymous function
(function(arr) {
  const isPalindrome = function(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  };

  const palindrome = arr.filter(function(word) {
    return isPalindrome(word);
  });

  console.log(palindrome);
})(words);


//Using an IIFE (Immediately Invoked Function Expression)
let palind = function(words) {
  const isPalindrome = function(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  };

  const palindrome = words.filter(function(word) {
    return isPalindrome(word);
  });

  console.log(palindrome);
};
palind(words);