const words = ["level", "hello", "racecar", "world", "deified"];


let palind = (words) =>{
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