# Buddy Strings

Given two strings `A` and `B` of lowercase letters, return `true` *if you can swap two letters in* `A` *so the result is equal to* `B`*, otherwise, return* `false`*.*

Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and swapping the characters at `A[i]` and `A[j]`. For example, swapping at indices `0` and `2` in `"abcd"` results in `"cbad"`.

 

**Example 1:**

```
Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
```

**Example 2:**

```
Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
```

**Example 3:**

```
Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
```

**Example 4:**

```
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true
```

**Example 5:**

```
Input: A = "", B = "aa"
Output: false
```

 

**Constraints:**

- `0 <= A.length <= 20000`
- `0 <= B.length <= 20000`
- `A` and `B` consist of lowercase letters.



## Solution

The approach used is "Iterative Approach". Also check for certain edge case scenarios

## Edge Case Scenarios

- If both strings are empty
- If one of the strings are empty / If the strings dont match in length
- If both strings just contain a single letter



## Iterative Approach

```javascript
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
  
    // check iteratively
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
```

## Testing

```javascript
console.log("", ""); // true
console.log("a", ""); // false
console.log("a", "b"); // false
console.log("a", "a"); // true

console.log("ab", "ba"); // true
```

