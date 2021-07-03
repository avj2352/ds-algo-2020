const createQueue = require('../queue/queue'); 
const createPriorityQueue = require('./priority-queue.js');
// TESTING

// const q = createQueue();
// q.enqueue('Learn Coding');
// q.enqueue('Apply for Google');
// q.enqueue('Get Google offer');

// console.log(q.peek());
// q.dequeue();
// console.log(q.peek());
// q.dequeue();
// console.log(q.peek());
// q.dequeue();
// console.log('Is Queue empty?', q.isEmpty());

// TESTING PRIORITY QUEUE
const pq = createPriorityQueue();

pq.enqueue('Learn Coding');
pq.enqueue('Apply for Google');
pq.enqueue('Prepare resume', true);
pq.enqueue('Get Google offer');

console.log(pq.peek());
pq.dequeue();
console.log(pq.peek());
pq.dequeue();
console.log(pq.peek());
pq.dequeue();
console.log(pq.peek());