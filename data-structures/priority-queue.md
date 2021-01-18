# Priority Queue

 A priority queue allows the user to add items to the queue that are deemed to be high priority, and get moved ahead in the line. 

We will use two Queues to create a PriorityQueue, namely - 

- _highQueue_ - Which stands for a High Priority Queue

- _lowQueue_ - Which stands for a Low Priority Queue

Our PriorityQueue data-structure will be the same as a normal Queue. We'll have an `enqueue`, `dequeue`, `peek`, and `isEmpty` method, as well as a `length` property, but we'll make some modification.

- **enqueue()** - For the enqueue method instead of one argument, we will introduce 2 arguments
  - *item* - the item we will be adding to the Queue (same as in Queue Datastructure)
  - *isPriority* - Whether the item should go into highQueue or lowQueue (determined by a boolean)
  - As a default the - *isPriority* argument is **false** 

- **dequeue()** - For the *dequeue* method we will first check if the *highQueue* is empty or not, if not then dequeue from it first, then the *lowQueue*
- **peek()** - *Peek* method also follows the same logic as the *dequeue* method
- **length** - The *length* of our PriorityQueue is the sum of the *lengths* of the 2 queues

- **isEmpty()** - The *isEmpty* method is the union of the 2 Queues' *isEmpty()* methods

```javascript
const createQueue = require('./queue.js'); 

function createPriorityQueue () {
  // creating a PQueue using 2 simple queues
	const highQueue = createQueue();
	const lowQueue = createQueue();
	return {
		// enqueue
		enqueue(item, isPriority=false) {
			if (isPriority) {
				highQueue.enqueue(item);
			} else {
				lowQueue.enqueue(item);
			}
		},
		// dequeue
		dequeue() {
			if (!highQueue.isEmpty()) {
				return highQueue.dequeue();
			} else {
				return lowQueue.dequeue();
			}
		},
		// peek
		peek() {
			if (!highQueue.isEmpty()) {
				return highQueue.peek();
			} else {
				return lowQueue.peek();
			}
		},
		// length
		get length() {
			return highQueue.length + lowQueue.length;
		},
		// isEmpty
		isEmpty() {
			return highQueue.isEmpty() && lowQueue.isEmpty();
		}
	};
}

module.exports = createPriorityQueue;

// TESTING PRIORITY QUEUE
const pq = createPriorityQueue();

pq.enqueue('Learn Coding');
pq.enqueue('Apply for Google');
pq.enqueue('Prepare resume', true); // goes to the top of the PQ (highQueue)
pq.enqueue('Get Google offer');

console.log(pq.peek()); // Prepare resume
pq.dequeue();
console.log(pq.peek()); // Learn Coding
pq.dequeue();
console.log(pq.peek()); // Apply for Google
pq.dequeue();
console.log(pq.peek()); // Get Google offer
```

### PriorityQueue Time complexity

Priority Queue Time Complexity follows the same as that of the Queue, only twice in size which compared in BigO is O(N)

| ALGORITHM | AVERAGE | WORST CASE |
| :-------- | :------ | :--------- |
| Space     | 0(2n)   | 0(n)       |
| Search    | 0(2n)   | 0(n)       |
| Insert    | 0(1)    | 0(1)       |
| Delete    | 0(1)    | 0(1)       |

