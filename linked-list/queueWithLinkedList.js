class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(val) {
    let newPerson = new Node(val);
    if (!this.first) {
      this.first = newPerson;
      this.last = newPerson;
    } else {
      this.last.next = newPerson;
      console.log(this.last);
      this.last = newPerson;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let restNodes = this.first.next;
      this.first = restNodes;
    }
    this.length--;
    return this;
  }
}

let myQueue = new Queue();
myQueue.enqueue("rakib");
myQueue.enqueue("Jahid");
myQueue.enqueue("Radin");
myQueue.dequeue();

console.log(myQueue);
