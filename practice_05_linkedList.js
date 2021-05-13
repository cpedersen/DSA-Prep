// Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
// - Output: `-1`

// APPROACH:
// 1. Take problem and split it into smaller problems
//    - Finish this (otherwise you might have an incomplete solution)
//    - Start with easiest case/requirement
// 2. Pseudocode
//    - Don't start coding until all logic has been planned
//      (A few hours of planning can save you days of coding)
// 3. Code
// 4. Try/test

const { LinkedList, display } = require("./linkedList");
const text1 = "Bilboa";
const text2 = "Bilbo";
const text3 = "Bilbob";

const createLinkedList = (arr) => {
  const LL = new LinkedList();
  for (const item of arr) {
    LL.insertLast(item);
  }
  return LL;
};
/*
const LL1 = createLinkedList(text1.split(""));
const LL2 = createLinkedList(text1.split(""));
display(LL1);
console.log("---");
display(LL2);
console.log(LL1.head);
*/
function doNodesMatch(node1, node2) {
  //const retVal = node1.value === node2.value;
  //console.log("retVal: ", retVal);
  return node1.value === node2.value;
}

function doBothNodesHaveNext(node1, node2) {
  return node1.next && node2.next;
}

function compare(text1, text2) {
  // create 2 linked list arrays
  const LL1 = createLinkedList(text1.split(""));
  const LL2 = createLinkedList(text2.split(""));
  display(LL1);
  console.log("---");
  display(LL2);

  // init using head
  let currentNodeOne = LL1.head;
  let currentNodeTwo = LL2.head;

  // loop until return
  while (true) {
    // Check if the values are the same
    const nodesMatch = doNodesMatch(currentNodeOne, currentNodeTwo);
    const bothHaveNext = doBothNodesHaveNext(currentNodeOne, currentNodeTwo);

    // If node values do not match
    if (!nodesMatch) {
      if (currentNodeOne.value < currentNodeTwo.value) {
        return -1;
      } else {
        return 1;
      }
    }

    // If both nodes have the same value
    if (nodesMatch) {
      // Check if only one LL has next node
      if (currentNodeOne.next && !currentNodeTwo.next) {
        return 1;
      }

      if (currentNodeTwo.next && !currentNodeOne.next) {
        return -1;
      }

      // If both nodes do not have next node
      if (!bothHaveNext) {
        return 0;
      }
    }

    currentNodeOne = currentNodeOne.next;
    currentNodeTwo = currentNodeTwo.next;
  }
}

const result = compare(text1, text3);
console.log({ result });
// var node3 = {
//   value: 3,
//   next: null,
//   prev: node2,
// };

// var node2 = {
//   value: 2,
//   next: node3,
//   prev: node,
// };

// var node = {
//   value: 1,
//   next: node2,
//   prev: head,
// };

// var head = {
//   value: 0,
//   next: node,
//   prev: null,
// };

// let currentNode = head;
// while (currentNode) {
//   console.log(currentNode.value);
//   if (currentNode.next) {
//     currentNode = currentNode.next;
//   } else {
//     currentNode = null;
//   }
// }
// console.log("---");
// let currentPrevNode = node3;
// while (currentPrevNode) {
//   console.log(currentPrevNode.value);
//   if (currentPrevNode.prev) {
//     currentPrevNode = currentPrevNode.prev;
//   } else {
//     currentPrevNode = null;
//   }
// }
