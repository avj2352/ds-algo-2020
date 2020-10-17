const decodeVarAlg = (arr, n=arr.length) => {
    // base case
    if (n == '0' || n == '1') return 1;
    let count = 0;
    if (arr[n-1] > '0') count  = decodeVarAlg(arr, n-1);
    if (arr[n-2] == '1' || arr[n-2] == '2' && arr[n-1] < '7') count += decodeVarAlg(arr, n-2);
    return count;
};

function decodeVariations(str) {
    const arr = str.split('');
    return decodeVarAlg(arr);
}


console.log(decodeVariations('1262'));