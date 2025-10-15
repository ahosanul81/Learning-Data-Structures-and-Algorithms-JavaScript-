class Stack {
  constructor(parameters) {
    this.arr = [];
  }
  added(val) {
    this.arr.push(val);
    return this.arr;
  }
}
const stack = new Stack("hello");
// stack.added(1);
// stack.added(1);
// stack.added(1);
// console.log(stack.arr);

class AnotherStack {
  constructor() {
    this.database = {};
    this.count = 0;
  }
  push(val) {
    this.count++;
    this.database[this.count] = val;
    return this.database;
  }
  pop() {
    delete this.database[this.count];
    this.count--;
    return this.database;
  }
}

const stack1 = new AnotherStack();
console.log(stack1.push(12));
console.log(stack1.push(14));
console.log(stack1.pop());
