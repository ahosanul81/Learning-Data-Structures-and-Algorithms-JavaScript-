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
}

const list = new singlyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(10);
list.push(14);
list.push(16);
list.pop();
console.log(list);
