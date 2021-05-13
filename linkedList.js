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
    // Create the init node obj
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
    // Checks to see if the linked list is empty
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
    // If the list is empty (there is no head)
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      // We reached the end of the list when we find null
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  insertBefore(newItem, beforeItem) {
    // When we reach the end of the list, insert item
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

  /*
  1, 2, 3, 4, 5, 3.5

  insertAt(3.5, 8)
  */

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
  console.log(values);
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

/*
15 Nodes

Curr - End
1 - 3
2 - 5
3 - 7
4 - 9
5 - 11
6 - 13
7 - 15
*/

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

/*
1
2
3
4
5


{
  value: 1,
  next: null
}

{
  value: 2,
  next: 3
}

{
  value: 3,
  next: null
}

*/

function reverse(list) {
  if (!list || list.head === null) {
    return "List not found";
  }
  // Store current node
  let currNode = list.head;
  // Store previous node
  let prevNode = null;
  // Store next node
  let nextNode = null;
  // Loop as long as we have nodes to go through
  while (currNode) {
    // Temporarily store the next node
    nextNode = currNode.next;
    // Override the next value of the current node
    currNode.next = prevNode;
    // Set the previous node to the current node
    prevNode = currNode;
    // Set the current node to the next node
    currNode = nextNode;
  }

  list.head = prevNode;

  return list;
}

module.exports = {
  LinkedList,
  display,
  size,
  isEmpty,
  middle,
  reverse,
};
