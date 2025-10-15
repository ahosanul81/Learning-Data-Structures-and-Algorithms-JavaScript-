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
}

const list = new singlyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(10);
list.push(14);
list.push(16);
console.log(list.head.next.next.next);
