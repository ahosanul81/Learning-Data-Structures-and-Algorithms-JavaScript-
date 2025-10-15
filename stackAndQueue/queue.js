class Queue {
  constructor() {
    this.arr = [1, 2, 3];
  }
  unshift(val) {
    this.arr.unshift(val);
    return this.arr;
  }
}
const queue1 = new Queue();
console.log(queue1.unshift(4));
