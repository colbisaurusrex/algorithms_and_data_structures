/*
    Binary Search only works on sorted lists.

    My first instinct on this was to do some sort of operation that resulted in the mutation of the array. While this may be possible, it would require some complex logic to keep track of an index in the original array before mutation.

    These solutions - not entirely my own - are more eloquent. They do not mutate the input but instead use trackers to form a kind of window. The window simply moves across the array. This window is reduced in size by half each iteration.


    Time complexity:
        - Best: O(1)
        - Worst: O(log n)
*/

const mockData  = require('../mockData.js')

const { states } = mockData

// console.log(binarySearch({ item: 'West Virginia', sortedCollection: states }))


function binary(arr, elm) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    while(arr[middle] !== elm && start <= end) {
        if(elm < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === elm ? middle : -1
}

console.log(binary(['1'], '1'))

// Recurisve

const recursiveBinarySearch = (arr, item, start, end) => {
    if(start > end) return false
    let middle = Math.floor((start + end) / 2)
    if(arr[middle] === item) return middle

    if(item < arr[middle]) return recursiveBinarySearch(arr, item, start, middle - 1)
    if(item > arr[middle]) return recursiveBinarySearch(arr, item, middle + 1, arr.length - 1)
}

// console.log(recursiveBinarySearch(['2'], '1', 0, 1))