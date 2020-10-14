const quickSort = (arr) => {
    // Look for edge cases
    if (arr.length < 2) return arr;
    // get the pivot index and pivot element
    const pivotIndex = Math.floor(arr.length/2);
    const pivot = arr[pivotIndex];
    const greater = [];
    const lesser = [];
    for(let i in arr ) {
        // If check so that we dont end up with the pivot element twice in the array
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