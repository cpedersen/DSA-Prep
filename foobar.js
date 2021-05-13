function countWordsFast(input) {
  const regex = /[.,?!]/g;
  const splitString = input.replace(regex, "").split(" ");
  console.log("splitString: ", splitString);

  let occurences = {};

  for (const item of splitString) {
    if (!(item in occurences)) {
      occurences[item] = 0;
    }
    occurences[item]++;
  }

  let printout = "";
  let counter = 1;
  const numOccurences = Object.keys(occurences).length;

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
