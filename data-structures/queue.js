function createQueue() {
	const arr = [];
	return {
		enqueue(item) {
			arr.unshift(item);
		},
		dequeue() {
			return arr.pop();
		},
		peek() {
			return arr[arr.length-1];
		},
		get length() {
			return arr.length;
		},
		isEmpty() {
			return arr.length === 0;
		}
	};
}

module.exports = createQueue;

