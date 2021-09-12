// iterate with a start and end pointer
// maintain a dictionary
function isDistinct (str, i, j) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.? '.split('');
    let visited = Array(alphabets.length).fill(false);
    while (i <= j) {
        if (visited[alphabets.indexOf(str.charAt(i)) - alphabets.indexOf('a')]) return false;
        visited[alphabets.indexOf(str.charAt(i)) - alphabets.indexOf('a')] = true;
        i++;
    }
    return true;
}


// main function
function longestSubstring (input) {
    const length = input.length;
    let res = 0;
    for (let i =0; i<length; i++) {
        for (let j = i; j<length; j++) {   
            if (isDistinct(input, i, j)) {
                res = Math.max(res, j-i+1);
            }         
        }
    }
    return res;
}


// Testing
const input01 = `abc abcd `;
console.log('Longest substring: ', longestSubstring(input01));
// example #1
const input02 = `abcabcbb`;
console.log('Longest substring: ', longestSubstring(input02));
// example #2
const input03 = `pwwkew`;
console.log('Longest substring: ', longestSubstring(input03));