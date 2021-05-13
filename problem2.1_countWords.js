// Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

function countWords(input) {
  const regex = /[\.\,\?\!]/g;
  let splitInput = input.replace(regex, "").split(" ");
  console.log(splitInput);

  let numItems = splitInput.length;
  console.log(numItems);
  let occurences = {};
  for (let i = 0; i < splitInput.length; i++) {
    const text = splitInput[i];
    console.log("text: ", text);
    let wordCount = 1;
    for (let j = 1; j < splitInput.length; j++) {
      //Compare text with next item
      if (i === j || text in occurences) {
        continue;
      }
      if (text === splitInput[j]) {
        wordCount++;
      }
    }
    occurences[text] = wordCount;
    console.log(wordCount);
  }
  return occurences;
}

function countWordsFast(input) {
  // Remove punctuation and split the string input into an array
  const regex = /[.,?!]/g;
  const splitString = input.replace(regex, "").split(" ");
  console.log("splitString: ", splitString);

  // Create empty occurences object
  let occurences = {};

  // Iterate over the array, setting key/values in occurences
  for (const item of splitString) {
    if (!(item in occurences)) {
      occurences[item] = 0;
    }
    occurences[item]++;
  }

  // Set variables for printout and counters
  let printout = "";
  let counter = 1;
  const numOccurences = Object.keys(occurences).length;

  // Iterate over key/values in occurences object to create the printout
  for (const [key, value] of Object.entries(occurences)) {
    if (numOccurences == counter) {
      printout += `${key} = ${value}`;
    } else {
      printout += `${key} = ${value}, `;
    }
    counter++;
  }
  //return occurences;
  return printout;
}

let testString =
  "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?";

const final = countWordsFast(testString);
console.log({ final });
