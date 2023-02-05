// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let HEAD = this.head;

    while (HEAD !== null) {
      HEAD = HEAD.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // List is empty
    if (this.head === null) {
      return null;
    }

    // List is not empty
    let NODE = this.head;

    while (NODE.next !== null) {
      NODE = NODE.next;
    }

    return NODE;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    // List is empty, there is no node to remove
    if (this.head === null) {
      return;
    }

    // List has only one node, remove that node
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    // List has more than one nodes, remove the last node
    let HEAD = this.head;

    while (HEAD.next.next !== null) {
      HEAD = HEAD.next;
    }

    // Now, HEAD is at second last node
    HEAD.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    // List is empty
    if (!lastNode) {
      this.head = new Node(data);
      return;
    }

    // List is not empty, insert new node at last position
    lastNode.next = new Node(data);
  }

  getAt(index) {
    let currentNode = this.head;
    let counter = 0;

    // Index is invalid
    if (!(index >= 0 && index < this.size())) {
      return null;
    }

    // List is empty
    if (!currentNode) {
      return null;
    }

    // Find the node at the given index
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  removeAt(index) {
    const node = this.getAt(index);
    const previous = this.getAt(index - 1);

    // 'node' does not exist
    if (previous && !node) {
      return;
    }

    // Remove first 'node'
    if (!previous && node) {
      this.head = node.next;
      return;
    }

    // Remove 'node'
    if (previous && node) {
      previous.next = node.next;
      node.next = null;
      return;
    }
  }

  insertAt(data, index) {
    const newNode = new Node(data);
    const node = this.getAt(index);
    const previous = this.getAt(index - 1);

    // List is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Insert new node at front
    if (!previous && node) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Insert new node, general case
    if (previous && node) {
      newNode.next = previous.next;
      previous.next = newNode;
      return;
    }

    // Insert new node at last
    if (previous && !node) {
      previous.next = newNode;
      return;
    }

    // Index out of bound case
    if (!previous && !node) {
      this.getLast().next = newNode;
      return;
    }
  }

  forEach(fn) {
    let HEAD = this.head;
    let index = 0;

    while (HEAD !== null) {
      fn(HEAD, index);
      HEAD = HEAD.next;
      index++;
    }
  }

  // LinkedList with Iterators and Generators
  *[Symbol.iterator]() {
    let node = this.head;
    while (node !== null) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
