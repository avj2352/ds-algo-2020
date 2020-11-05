# Find the Median in a DataStream

- Difficulty - hard
- [Leetcode Link](https://leetcode.com/problems/find-median-from-data-stream/)

## Challenge

Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,

```
[2,3,4]`, the median is `3
[2,3]`, the median is `(2 + 3) / 2 = 2.5
```

Design a data structure that supports the following two operations:

- void addNum(int num) - Add a integer number from the data stream to the data structure.
- double findMedian() - Return the median of all elements so far.

### Example:

```
addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
```

### Follow up

1. If all integer numbers from the stream are between 0 and 100, how would you optimize it?
2. If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?

## Approach

Create a Datastructure which holds an array. The unique thing about this challenge is that you need to **sort** the array. It took me a while to figure it out -

> NOTE: Javascript number sort, write the full function. just arr.sort() will not work in this case

```javascript
arr.sort((a,b) => a-b); // Proper sorting for numbers array
```

### Datastructure

Let's assume the class is named - **MedianFinder**. It will have the following important methods

- constructor - initialize an array
- addNum - Just append to the array
- findMedian - Sort the array and then write the logic

### How to find the Median

- Edge case #1 - if the length is zero, return 0
- Edge case #2 - if the length is 1, return the first element
- Sort the array - Make sure to implement the full function
- If the remainder is 0, return Math.floor(this.array.length/2);
- If the remainder is 1, return the average of Math.floor(this.array.length and its previous neighbor)

## Solution

```javascript
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
```

---

