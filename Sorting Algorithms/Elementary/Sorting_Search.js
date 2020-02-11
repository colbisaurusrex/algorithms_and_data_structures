
const mockData  = require('../../mockData.js')

const { getUnsortedArray } = mockData

const unsortedArray = getUnsortedArray(15)


const swap = (arr, idx1, idx2) => {
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr
}

/*

    NOTES:
        - Not efficient
        - time complexity: o(n2)
        - Could potentially be better than bubble sort in one scenario: if you want to minimize the number of swaps.

*/

const selectionSort = arr => {
    for(var i  = 0; i < arr.length; i++) {
        var lowest = i
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr
}

console.log(selectionSort(unsortedArray))