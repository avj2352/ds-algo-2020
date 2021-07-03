# Queues in Javascript

- [10 common Datastructures - Freecodecamp](https://www.freecodecamp.org/news/10-common-data-structures-explained-with-videos-exercises-aaff6c06fb2b/)
- [Link to EggHead course](https://egghead.io/lessons/javascript-queue-data-structure-in-javascript)

> “Bad programmers worry about the code. Good programmers worry about data structures and their relationships.” — Linus Torvalds, creator of Linux

A queue is a collection of items that obeys the principle of first-in/first-out. When we place an item into the queue, we can only get it out after all the other items that have been added before it have been removed.

> In order to store our items, we'll use an array-held in closure. 
>
> **Remember**: Closures wrap over just the variable,  **NOT** the value of the variable

Let's start with our enqueue method. We want to keep our collection in the correct order, so we always want to add to the array from one side of it and remove items from the other.

The following table illustrates key points of the Queue Datastructure

| Method     | Description                       |
| ---------- | --------------------------------- |
| enqueue    | using _arr.unshift(item);_        |
| dequeue    | using _return arr.pop();_         |
| peek       | using _return arr[arr.length-1];_ |
| isEmpty    | using _return arr.length === 0;_  |
| get length | using _return arr.length_;        |

> NOTE: If we just associate `queue.length` with our `length` key, we'll get the value zero because that's the value of `queue.length` when our object is created because of CLOSURE
>
> Instead, we want to use a getter function that always returns us the current queue's length.

```js
/**
* Queues in Javascript
* principle - FIFO
*/
function createQueue() {
  
  const queue = []; // this is a closure
  
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length == 0;
    }
  };
  
}

// Testing
const q = createQueue();
// stack
q.enqueue('Make an egghead lesson');
q.enqueue('Help others learn');
q.enqueue('Be happy');
// remove
q.dequeue();
q.dequeue();
q.dequeue();

// check
console.log(q.isEmpty()) // true
```

### Queue Time complexity

| ALGORITHM | AVERAGE | WORST CASE |
| :-------- | :------ | :--------- |
| Space     | 0(n)    | 0(n)       |
| Search    | 0(n)    | 0(n)       |
| Insert    | 0(1)    | 0(1)       |
| Delete    | 0(1)    | 0(1)       |

---

