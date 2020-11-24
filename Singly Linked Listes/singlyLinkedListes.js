//let's make a node
//a node is a pies of data and have a reference to the next node

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head;
    this.tail;
    this.length = 0;
  }
  push(value) {
    let temp = new Node(value);
    if (this.length === 0) {
      this.head = temp;
      this.tail = this.head;
    } else {
      this.tail.nextNode = temp;
      this.tail = temp;
    }
    this.length++;
    return this;
  }
  showValues() {
    let current = this.head;
    let list = [];
    while (current) {
      list.push(current.value);
      current = current.nextNode;
    }
    return list;
  }
  pop() {
    if (this.length == 1) {
      let current = this.head;
      this.head = null;
      return current;
    }
    let current = this.head;
    while (current) {
      if (current.nextNode.nextNode == null) {
        this.tail = current;
        this.tail.nextNode = null;
        this.length--;
        return current;
      }
      current = current.nextNode;
    }
  }
}
let list = new SinglyLinkedList();
list.push("issam");
list.push("issam2");
list.push("issam3");
list.push("issam4");
list.push("issam5");
//console.log(list);

// // console.log(list.tail);
// // console.log(list.length);
// list.showValues();
// list.push("chaimae");
// list.push("chaimae2");
// list.push("chaimae3");
console.log(`${list.pop().value} has been deleted .`);
console.log(`${list.pop().value} has been deleted .`);
console.log(`${list.pop().value} has been deleted .`);
console.log(`${list.pop().value} has been deleted .`);
console.log(`${list.pop().value} has been deleted .`);
