class Node {
  constructor(val) {
    this.prev = null;
    this.value = val;
    this.next = null;
  }
}

class DoublyLinkList {
  constructor(parameters) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return null;
    }
    let popedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail = popedNode.prev;
      this.tail.next = null;
      popedNode.prev = null;
    }
    this.length--;
    return this;
  }
  shift() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let nextNodes = this.head.next;
    nextNodes.prev = null;
    this.head = nextNodes;
    this.length--;
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    const oldNodes = this.head;
    oldNodes.prev = newNode;
    newNode.next = oldNodes;
    this.head = newNode;
    this.length++;
    return this;
  }
  showList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return arr;
  }
}
const list = new DoublyLinkList();
list.push(2);
list.push(4);
list.push(6);
list.push(9);
// list.pop();
// list.unshift(10);
// list.shift();
// list.shift();

console.log(list);
console.log(list.showList());
