function isPalindrome(word) {
  // Write your algorithm here
  for(let i = 0; 1 <word.length/2; i++){
    let j = word.length-1-i;
    if(word[i] !== word[j]) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  iterate over all the words from the begining to the middle and from the back to the middle.
  if the words from the begining and the words from behind match
  return true if not return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
