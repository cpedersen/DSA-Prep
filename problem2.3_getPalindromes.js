// Given a string, write an algorithm to count the number of
// words in the string that are palindromes. The output must
// include a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function getPalindromes(input) {
  // 1. Split the input string into separate strings (array of strings)
  let splitInput = input.split(" ");
  console.log("splitInput: ", splitInput);

  // 2. Create output string variable (array)
  let output = [];

  // 3. Loop through each item in the array
  //    3a. Get current item
  //    3b. Create new variable, reversing current item contents
  //    3c. Compare 2 items
  //        If match, set true; else set false
  //        Push matches onto string array
  for (const word of splitInput) {
    if (word.length === 1) continue;
    let wordLower = word.toLowerCase();
    let reverseWord = wordLower.split("").reverse().join("");
    if (wordLower === reverseWord) {
      output.push(word);
    }
  }
  output.push(`${output.length} Palindromes`);
  return output;
}

let input = "Dad gave mom a Tesla as a racecar";
const res = getPalindromes(input);
console.log("result: ", res);
