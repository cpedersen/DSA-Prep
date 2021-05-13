// Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

function findModeFrequency(listItems) {
  const occurences = {};

  for (const item of listItems) {
    if (!(item in occurences)) {
      occurences[item] = 0;
    }
    occurences[item]++;
  }

  let highestFrequency = 0;
  let mode = 0;
  for (const [currentMode, currentModeFrequency] of Object.entries(
    occurences
  )) {
    if (currentModeFrequency > highestFrequency) {
      highestFrequency = currentModeFrequency;
      mode = currentMode;
    }
  }
  if (highestFrequency == 1) {
    return "No mode found";
  }
  return `Mode = ${mode}, Frequency of mode = ${highestFrequency}`;
}
let listNums = [1, 2, 3, 6, 10, 3, 5, 6, 3, 3];
listNums = [1, 2, 3, 2];
const result = findModeFrequency(listNums);
console.log(result);
