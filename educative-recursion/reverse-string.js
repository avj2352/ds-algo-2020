function firstIndex(arr, testVariable, currentIndex) {
    // Write your code here
    if (arr.length == 0) return currentIndex;
    if(arr[arr.length-1] == testVariable ) currentIndex =  arr.length-1;
    arr.pop();
    return firstIndex(arr, testVariable, currentIndex);
}

console.log(firstIndex([9, 8, 1, 8, 1, 7], 8, 0))