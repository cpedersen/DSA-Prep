const { LinkedList, display, middle } = require("./linkedList");
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

const list = createLinkedList([
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
]);
console.log(middle(list));
