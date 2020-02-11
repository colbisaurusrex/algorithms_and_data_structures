
const {
    performance
  } = require('perf_hooks');


/*
  NOTES:
    - Time complexity:
        - worst: O(n2)
        - best: near O(n) on nearly sorted lists
*/


const length = 100
const getUnsortedArray = () =>  Array.from({ length }, () =>  Math.floor(Math.random() * 20))
// console.log(unsorted)
const swap = (arr, idx1, idx2) => {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr
}


// My own solution but recursive is way slower and tends to reach a maximum call stack error when the length of the array gets too long
const recursiveBubbleSort = (col) => {
    for(var i =0; i < col.length; i++) {
        if(col[i] > col[i+1]) {
            col = swap(col, i, i + 1)
            recursiveBubbleSort(col)
        }
    }
    return col
}

function unoptimizedBubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
}

function optimizedBubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;
        }
      }
      if(noSwaps) break;
    }
    return arr;
  }




console.log('Performing on array of this length:', length)
const one = performance.now()
recursiveBubbleSort(getUnsortedArray())
const two = performance.now()
console.log(two - one, 'Recursive')

const three = performance.now()
unoptimizedBubbleSort(getUnsortedArray())
const four = performance.now()
console.log(four - three, 'Iterative (unoptimized)',)

const five = performance.now()
optimizedBubbleSort(getUnsortedArray())
const six = performance.now()
console.log(six - five, 'Iterative (optimized)',)