/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.array = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.array.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // edge case
    if (this.array.length == 0) return 0;
    if (this.array.length == 1) return this.array[0];
    this.array.sort((a,b) => a-b);
    if (this.array.length%2 == 0) {
        const temp1 = Math.floor(this.array.length/2);
        return Math.floor(this.array[temp1] + this.array[temp1-1])/2;
    } else if (this.array.length%2 == 1) {
        const temp1 = Math.floor(this.array.length/2);
        return (this.array[temp1]);
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */