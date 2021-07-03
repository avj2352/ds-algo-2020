const createQueue = require('./queue.js'); 

function createPriorityQueue () {
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
