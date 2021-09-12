/**
 * print one character at a time
 * @param {char[]} arr 
 * @param {number} i 
 * @returns a character
 */
function printName(arr, i) {
    return arr[i-1];
}

// main function
function recursivePrint(arr, len, res=[]) {        
    if(len === 0) return res.join('');
    else {
        res.unshift(printName(arr, len));
        return recursivePrint(arr, len-1, res);
    }
}


const name = 'pramod';
const str = 'pramod'.split('');

console.log(recursivePrint(str, str.length));