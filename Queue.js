class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enQueue(value) { // O(1)
    this.storage[this.tail++] = value;
    if (this.storage[this.head] == null) {
      this.head = this.tail - 1;
    }
  }
  deQueue() { // O(1)
    delete this.storage[this.head++]; 
  }
  size() {
    return this.tail - this.head;
  }
}
