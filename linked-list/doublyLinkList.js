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
}
const list = new DoublyLinkList();
// list.push(2);
// list.push(4);
// list.push(6);
// list.push(9);
// list.pop();
// list.unshift(10);
list.shift();
list.shift();
console.log(list);
