# Algorithms in JS - EggHead

- [EggHead Course link](https://egghead.io/lessons/javascript-sort-a-array-with-a-quicksort-function-in-javascript)

## Quick Sort in Javascript

Quick sort is a _**Divide & Conquer**_ approach algorithm which uses recursion. It is mainly dividing the array under consideration into 3 main categories

- Less than array
- Pivot (& Pivot index)
- Greater than array

> **NOTE:** The most important aspect of Quick sort is to find the right element within the array as a **Pivot element**



### QuickSort (Ascending Order)

```javascript
const quickSort = (arr) => {
    // Look for edge cases
    if (arr.length < 2) return arr;
    // get the pivot index and pivot element
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr[pivotIndex];
    const greater = [];
    const lesser = [];
    for(let i in arr ) {
        // === doesnt seem to work with quickSort
        if (i != pivotIndex) {
            arr[i] > pivot ? greater.push(arr[i]) : lesser.push(arr[i]);
        }
    }
    return ([
        ...quickSort(lesser),
        pivot,
        ...quickSort(greater)
    ]);
};

console.log(quickSort([3,4,5,6,7,2,1]));
```

### QuickSort (Descending Order)

In order to have a QuickSort in descending order, you just need to swap the lesser & greater elements while spreading out the result in the recurring function

```javascript
// Ascending order
return ([
  ...quickSort(lesser),
  pivot,
  ...quickSort(greater)
]);

// Descending order
return ([
  ...quickSort(greater),
  pivot,
  ...quickSort(lesser)
]);
```

## Time Complexity

- **Best Case scenario**: In both Best Case Scenario or Worst Case Scenario we need to traverse through the array atleast once. In best case scenario, It will be O(N) + O(logN) ~ ON(logN)
- **Worst Case scenario:** If the pivot element is not found using the optimal solution, then we would traverse through the array again so the Time Complexity would be ~ O(N2) 

