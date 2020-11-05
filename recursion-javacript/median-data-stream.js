const median = (input) => {
    const arr = Array.from(input);
    // edge case
    if (arr.length == 0) return 0;
    if (arr.length == 1) return arr[0];
    arr.sort((a,b) => a-b);
    if (arr.length%2 == 0) {
        // return Math.floor(arr.length/2);
        const temp1 = Math.floor(arr.length/2);
        return Math.floor(arr[temp1] + arr[temp1-1])/2;
    } else if (arr.length%2 == 1) {
        const temp1 = Math.floor(arr.length/2);
        return (arr[temp1]);
    }
};

const set = new Set();
set.add(6);
set.add(10);
set.add(2);
set.add(6);
set.add(5);
console.log(Array.from(set).sort((a,b) => a-b));
console.log('The Median for the data stream is: ', median(set));