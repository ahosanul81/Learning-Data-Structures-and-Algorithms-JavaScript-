class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  isEmpty() {
    return this.length === 0;
  }
  push(val) {
    let newNode = {
      value: val,
      next: null,
    };
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return removedNode;
    }
    let currentNode = this.head;
    let lastNode = this.tail;
    let newLastNode;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        newLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    newLastNode.next = null;
    this.tail = newLastNode;
    this.length--;
    return lastNode;
  }
  shift() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this;
    }
    let currentNode = this.head;
    let nextNode = this.head.next;
    if (currentNode) {
      this.head = nextNode;
      this.length--;
    }
    return this.head;
  }
  unshift(val) {
    if (this.isEmpty()) {
      const newNode = { value: val, next: null };
      this.head = newNode;
      this.tail = newNode;
    }

    const oldNodes = this.head;
    // console.log(oldNodes);
    this.head = { value: val, next: oldNodes };
    this.length++;
    return this.head;
  }
  showList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const list = new singlyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(10);
list.push(14);
// list.push(16);
// list.pop();
// list.shift();
// list.shift();
// list.shift();
// list.shift();
list.unshift(2);
// console.log(list);
console.log(list.showList());
