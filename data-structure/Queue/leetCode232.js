/*
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
 

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

 */

var MyQueue = function () {
    this.s1 = []
    this.s2 = []
};


MyQueue.prototype.push = function (x) {
    while (this.s1.length !== 0) {
        this.s2.push(this.s1.shift())
    }
    this.s1.push(x)
    while (this.s2.length !== 0) {
        this.s1.push(this.s2.shift())
    }
    console.log(this.s1)
   
  

};


MyQueue.prototype.pop = function () {
    return this.s1.pop()
};

MyQueue.prototype.peek = function () {
    return this.s1[this.s1.length-1]
};

MyQueue.prototype.empty = function () {
    return this.s1.length === 0

};


var queue = new MyQueue()


queue.push(1)
queue.push(2)
queue.push(3)


// way 2 using class 

class MyQueue2 {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    push(item) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
  
      this.stack1.push(item);
  
      while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
      }
    }
  
    pop() {
      if (this.empty()) return -1;
  
      const top = this.stack1[this.stack1.length - 1];
      this.stack1.pop();
      return top;
    }
  
    peek() {
      if (this.empty()) return -1;
  
      return this.stack1[this.stack1.length - 1];
    }
  
    empty() {
      return this.stack1.length === 0;
    }
  }
  
  /** 
   * Your MyQueue object will be instantiated and called as such:
   * var obj = new MyQueue()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.peek()
   * var param_4 = obj.empty()
   */