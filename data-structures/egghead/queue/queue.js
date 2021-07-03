function createQueue() {
	const arr = [];
	return {
		// add or enqueue
		enqueue(item) {
			arr.unshift(item);
		},
		// remove or dequeue
		dequeue() {
			return arr.pop();
		},
		// peek
		peek() {
			return arr[arr.length-1];
		},
		// length
		get length() {
			return arr.length;
		},
		// check if queue is empty
		isEmpty() {
			return arr.length === 0;
		}
	};
}

module.exports = createQueue;

