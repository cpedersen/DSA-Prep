class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currNode.next;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  insertBefore(newItem, beforeItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.next !== null && currNode.value !== beforeItem) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return `${beforeItem} not in list`;
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }

  insertAfter(newItem, afterItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
      return;
    }
    let currNode = this.find(afterItem);
    if (currNode === null) {
      return `${afterItem} not in list`;
    }
    const newNode = new _Node(newItem, currNode.next);
    currNode.next = newNode;
  }

  insertAt(newItem, position) {
    if (!this.head) {
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    for (let i = 0; i < position - 1; i++) {
      if (currNode.next === null) {
        this.insertLast(newItem);
        return "Item added to end of list";
      }
      prevNode = currNode;
      currNode = currNode.next;
    }
    const newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }
}

function display(list) {
  let values = [];
  let currNode = list.head;
  while (currNode !== null) {
    values.push(currNode.value);
    currNode = currNode.next;
  }
  return { ...values };
}

function size(list) {
  let counter = 0;
  let currNode = list.head;
  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(list) {
  if (!list.head || list.head === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(item, list) {
  if (!list.head || list.head === null) {
    return "List not found";
  }
  let currNode = list.head;
  let prevNode = list.head;
  while (currNode !== null && currNode.value !== item) {
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === list.head) {
    return `${item} is the first node`;
  }
  if (currNode === null) {
    return `${item} not in list`;
  }
  return prevNode.value;
}

function findLast(list) {
  if (!list.head || list.head === null) {
    return "Not a list.";
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  return currNode.value;
}

function thirdFromEnd(list) {
  if (!list.head || list.head === null) {
    return "List not found";
  }
  let currNode = list.head;
  while (currNode.next !== null) {
    nextNode = currNode.next;
    nextNextNode = nextNode.next;
    if (nextNextNode.next === null) {
      return `${currNode.value}`;
    } else {
      currNode = nextNode;
    }
  }
}

function middle(list) {
  if (!list || list.head === null) {
    return "List not found";
  }
  let currNode = list.head;
  let endNode = currNode.next.next;

  while (endNode.next !== null) {
    currNode = currNode.next;
    endNode = endNode.next.next;
    if (!endNode) {
      return `${currNode.value}`;
    }
  }
  return `${currNode.next.value}`;
}

function deleteDupes(sortedNumbers) {
  let SLL = new LinkedList();

  for (const num of sortedNumbers) {
    SLL.insertLast(num);
  }

  // While (up to numItems)
  let currentNode = SLL.head;
  while (currentNode) {
    console.log(currentNode.value);
    // If we are at the last item, it means there are
    // no more duplicates, so bail out
    if (!currentNode.next) break;
    const nextNode = currentNode.next;
    const nextNodeValue = nextNode.value;

    // If the values are the same, then remove it
    // from the list
    if (currentNode.value === nextNodeValue) {
      SLL.remove(nextNodeValue);
    }
    // We have the next node, so override current Node
    currentNode = currentNode.next;
  }

  return SLL;
}

//Given a sorted linked list, write an algorithm to delete
// all duplicate numbers from the sorted linked list.
const sll = deleteDupes([1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 7, 7, 7, 10, 10]);
console.log(display(sll));
