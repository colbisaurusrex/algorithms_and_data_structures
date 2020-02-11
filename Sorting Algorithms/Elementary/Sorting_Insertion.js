/*
    NOTES:
        - Builds up the sort by gradually creating a larger left half which is always sorted
        - "Online algorithm" - data is incoming live, like a stream
        - Time complexity:
            - worst: O(n2)
            - best(already near sorted): O(n)
*/


const mockData  = require('../../mockData.js')

const { getUnsortedArray } = mockData

const unsortedArray = getUnsortedArray(10)

console.log('unsorted', unsortedArray )
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }
    return arr
}
// j = []
// i = ()
// currentVal = 3

// [[8], (3), 23, 4, 16, 78, 3, 1, 0, 56]
// [[8], (8), 23, 4, 16, 78, 3, 1, 0, 56]

console.log('sorted  ', insertionSort(unsortedArray))