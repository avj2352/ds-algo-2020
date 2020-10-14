/**
 * returns a swapped array   
 * @param {Array} arr
 * @return {Array}
 */
const swap = (arr) => {
    const temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
};

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const buddyStrings = (a, b) => {
    // edge case scenarios
    if (a.length == 0 && b.length == 0) return true;
    if (a.length != b.length) return false;
    if (a.length == 1 && b.length == 1 && a == b) {
        return true;
    } else if (a.length == 1 && b.length == 1 && a != b) {
        return false;
    }
    // check recursively
    
    let arr = a;
    let brr = b;
    while (arr.length != 0) {
        const temp1 = arr.substr(0,1);
        arr = arr.substr(1);
        const temp2 = brr.substr(0,1);
        brr = brr.substr(1);
        
        if (temp1.concat(arr[0]) != temp2.concat(brr[0])) {
            if (swap(temp1.concat(arr[0])) != temp2.concat(brr[0]) && a.length == 0) {
                return false;
            }
        }
    }
    return true;
};


console.log(buddyStrings("ab", "a"));