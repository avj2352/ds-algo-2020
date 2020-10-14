/*
 * Swap function
 * @param items
 * @param left
 * @param right
 * */
function swap(items, left, right) {
    const temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}



export function selectionSort(items) {
  let len = items.length;
  let min; // declare minimum variable

  for (let i = 0; i < len; i++) {
    //set minimum to this position
    min = i;

    //check the rest of the array to see if anything is smaller
    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    //if the minimum isn't in the position, swap it
    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}

console.log('Sorted array: ', selectionSort(arr)); // [1,2,2,3,4,4,5,7,8,8,9,10]