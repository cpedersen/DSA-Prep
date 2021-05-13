const { LinkedList, display, reverse } = require("./linkedList");

const createLinkedList = (arr) => {
  const LL = new LinkedList();
  for (const item of arr) {
    LL.insertLast(item);
  }
  return LL;
};

const list = createLinkedList([1, 2, 3, 4, 5]);
console.log("check");
display(list);
display(reverse(list));
