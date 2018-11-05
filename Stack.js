class Stack {
  constructor() {
    this.storage = "";
  }
  push(value) { // O(1)
    this.storage = this.storage.concat(",", value);
    return this.storage;
  }
  pop() { // O(1)
    this.storage = this.storage.substring(0, this.storage.indexOf(','));
  }
  size() { // O(n)
    return this.storage.split(",").length - 1
  }
}