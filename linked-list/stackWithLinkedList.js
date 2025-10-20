class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class BookStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  push(val) {
    const book = new Node(val);
    if (!this.top) {
      this.top = book;
      this.bottom = book;
      return this;
    } else {
      //   let currentNode = this.top;
      //   while (currentNode.next === null) {
      //     if (currentNode.next === null) {
      //       currentNode.next = book;
      //       console.log(currentNode.next);
      //       this.length++;
      //       this.bottom = book;
      //       break;
      //     }
      //     currentNode = currentNode.next;
      //   }
      let holdingBook = this.top;
      this.top = book;
      this.top.next = holdingBook;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      return (this.bottom = null);
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
const list = new BookStack();
list.push("book1");
list.push("book2");
list.push("book3");
list.push("book4");
list.pop();

console.log(list);
