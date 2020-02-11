const mockData  = require('../../mockData.js')

const { getArrayOfNumbers } = mockData

const harry = getArrayOfNumbers(5)
const lloyd = getArrayOfNumbers(5)

/*
    NOTES:
        - combo of merging and sorting
        - exploits that arrays of 0 or 1 element is always sorted
        - divide and conquer approach
        - most implementations are recursive
        - Time Complexity:
            - Best, Average & Worst: O(n log n)
            - Space Complexity: O(n)

*/

// Arrays must be sorted first
function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++
    }
    return results
}

// console.log(merge(harry, lloyd))
console.log(merge([1], [0, 14, 99, 100]))

/*
    PSEUDOCODE
        - break up the array into halves until you have arrays that are empty or have one element
        - once you have smaller sorted arrays, merge those arrays with other sorted arrrays until you are back at the full length of the array
        - once the array has been merged back together, return the merged (and sorted) array
*/

function mergeSort(arr) {
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}