# Deletion Distance

- [Link to the problem](https://www.pramp.com/challenge/61ojWAjLJbhob2nP2q1O)

The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between `"heat"` and `"hit"` is `3`:

- By deleting `'e'` and `'a'` in `"heat"`, and `'i'` in `"hit"`, we get the string `"ht"` in both cases.
- We cannot get the same string from both strings by deleting `2` letters or fewer.

Given the strings `str1` and `str2`, write an efficient function `deletionDistance` that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

**Examples:**

```pramp
input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0
```

**Constraints:**

- **[input] string str1**
- **[input] string str2**
- **[output] integer**



## Approach

The solution can be solved **recursively** by following the below provided mathematical formulae


$$
dd(st1, st2) = \begin{vmatrix}
if(st1=='' \&\&\ st2=='') & 0 \\
if (st1=='' || \ st2=='') & max(st1.length, st2.length) \\
if (st1[0] == st2[0]) & dd(st1.substr(1), st2.substr(1)) \\
else & min(dd(st1.substr(1), st2),dd(st1, st2.substr(1))+1 \\
\end{vmatrix}
$$

## Solution

```javascript
function deletionDistance (str1, str2) {
    // 1. Check for Edge case - these would also form the base case
    if (str1 === "" && str2 === "") return 0;
   // 2. If either is 0, then the deletion distance would be length of the other
    if (str1 === "" || str2 === "") return Math.max(str1.length, str2.length);
  
    // 3. Recursive method
    if (str1[0] === str2[0]) {
      return deletionDistance(str1.substr(1), str2.substr(1));
    } else {
      return (
        Math.min(
          deletionDistance(str1.substr(1), str2),
          deletionDistance(str1, str2.substr(1))
        ) + 1;
      );
    }
}
```

