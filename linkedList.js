#!/usr/bin/env node

class linkedList {
  constructor() {
    this.headOfList = null;
  }
  prepend(value) {}
  append(value) {
    let newNode = new Node(value);
    if (this.headOfList === null) {
      this.headOfList = newNode;
    } else {
      let temp = this.headOfList;
      while (temp.nextNode != null) temp = temp.nextNode;
      temp.nextNode = newNode;
    }
  }

  size() {}
  head() {}
  tail() {}
  at(index) {}
  pop() {}
}

class Node extends linkedList {
  constructor(value) {
    super();
    this.value = value || null;
    this.nextNode = null;
  }
}

const list = new linkedList();
list.append("OK");
list.append("OK 2");
console.log(list);
