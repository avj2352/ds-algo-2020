# Recursion vs Iteration

## Important Links

- [Educative Link - Recursion versus Iteration](https://www.educative.io/courses/recursion-for-coding-interviews-in-javascript/3jpJBE1k4v4)

## General Idea behind Iteration & Recursion

- The concept of _Recursion_ & _Iteration_ is to execute a set of instruction repeatedly.
- Both _Iteration_ & _Recursion_ depend on a condition which determines whether to stop the execution or repeat it

## Differences between Iteration & Recursion

|                          Recursion                           |                          Iteration                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| Recursion refers to a situation where a function calls itself again and again until some *base condition* is reached. | Iteration refers to a situation where some statements are executed again and again using loops until some condition is satisfied. |
| Recursion is always called on a function, therefore it is called a **process**. | Iterative code is applied on variables and is a set of instructions that are executed repeatedly. |
| Recursive code terminates due to the *base condition*being satisfied. | Iterative code either runs for a particular number of times or until a specified condition is met. |
| Recursive code is slower than iterative code as it not only runs the program but also has to manage stack memory. |       Iterative code has a relatively faster runtime.        |
|                Recursive function uses Stack                 |            Iterative function does not use Stack             |

## Steps for Converting Iterative Code to Recursive

- Identify the *Most simplest task* required to complete / exit the loop and mark it as the **Base Case**
- **Local variables** of a Iterative version (usually) turn into **Parameters** in a Recursive version
- If the LocalVariable is used as parameter - the Recursive function should either include
  - Passing the same function **as a value** to the Parameter (ie., Variable assignment)
  - Having a **return keyword** to the same function

## 1. Find the Square of a Number Recursively

Implement a function that takes a number `testVariable` and returns the square of the number. Try using the following mathematical identity to solve this problem - 
$$
(n-1)^2 =  n^2 - 2*n + 1
$$


### Solution

To Solve the above problem recursively, we need to tweak the formula
$$
(n-1)^2 = n2 - 2*n + 1
$$

$$
(n-1)^2 + 2n - 1 = n^2
$$

_OR_

$$
recursiveFn() = recursiveFn(n-1) + 2*n - 1
$$


```javascript
function findSquare(testVariable) {
  if (testVariable == 0) return 0;
  return findSquare(testVariable-1) + 2*testVariable -1;
}
```

## 2. Search the First Occurrence of a Number

Implement a function that takes an array `arr`, a `testVariable` containing the number to search and `currentIndex` containing the starting index as parameters and outputs the index of the first occurrence of `testVariable` in `arr`. If `testVariable` is not found in `arr` return `−1`.We want to search for a `targetNumber` from index `currentIndex` to the end of the array.

### Solution

```javascript
function firstIndex(arr, testVariable, currentIndex) { // returns the first occurrence of testVariable
  // Base case1
  if (arr.length == currentIndex) {
    return -1;
  }

  // Base case2  
  if (arr[currentIndex] == testVariable) {
    return currentIndex;
  }
  
  // Recursive case
  return firstIndex(arr, testVariable, currentIndex + 1);
}

// Driver Code
var arr = [9, 8, 1, 8, 1, 7];
var testVariable = 1;
var currentIndex = 0;
console.log(firstIndex(arr, testVariable, currentIndex));
```

## 3. Write an Algorithm to find the nth Fibonacci Number

Implement a function that takes a variable `testVariable` and finds the number that is placed at that index in the *Fibonacci sequence*.

### What is the Fibonacci Sequence?

The Fibonacci sequence is one of the most famous sequences in mathematics. Each number in the sequence is the sum of the two numbers that precede it.

So, the sequence goes:

$ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 … $

### Solution

```javascript
function fibonacci(testVariable) {
  // Base case
  if (testVariable <= 1) {
    return testVariable;
  }

  return(fibonacci(testVariable - 1) + fibonacci(testVariable - 2));
}

// Driver Code
var testVariable = 7;
console.log(fibonacci(testVariable));
```

# Recursion with Numbers

