#!/usr/bin/env node

class linkedList {
  constructor() {
    this.headOfList = null;
  }
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
  prepend(value) {
    let temp = null;
    if (this.headOfList != null) {
      temp = this.headOfList;
    }
    this.headOfList = new Node(value);
    this.headOfList.nextNode = temp;
  }
  size() {
    let temp = this.headOfList;
    let count = 0;
    while (temp.nextNode != null) {
      count++;
      temp = temp.nextNode;
    }
    return count + 1;
  }
  head() {
    return this.headOfList.value;
  }
  tail() {
    let temp = this.headOfList;
    while (temp.nextNode != null) temp = temp.nextNode;
    return temp.value;
  }
  at(index) {
    let temp = this.headOfList;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp === null) return "There is nothing at that index mate";
    }
    return temp.value;
  }
  pop() {
    let currentNode = this.headOfList;
    let previousNOde = null;
    while (currentNode.nextNode != null) {
      previousNOde = currentNode;
      currentNode = currentNode.nextNode;
    }
    previousNOde.nextNode = null;
  }
  find(value) {
    let index = 0;
    let temp = this.headOfList;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.nextNode;
    }
    return false;
  }
  toString() {
    let temp = this.headOfList;
    let outputString = "";
    while (temp != null) {
      outputString += `(${temp.value}) => `;
      temp = temp.nextNode;
    }
    return (outputString += "null");
  }
}

class Node extends linkedList {
  constructor(value) {
    super();
    this.value = value || null;
    this.nextNode = null;
  }
}

const list = new linkedList();

list.append("This was added first to the end");
list.append("Then this");
console.log(list);
list.prepend("A new head was added");
list.append("Then we put some stuff at the end");
console.log(list);
console.log(list.toString());
