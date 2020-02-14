/*
    NOTES:
        - like merge sort, expoits the fact that arrays of 0 or 1 elements are always sorted
        - works with one element called a pivot
            - finds where the pivot should end up
*/

// less than pivot to the left
// more than pivot to the right
// does everything in place
// returns index of pivot

function swap(arr, idx1, idx2){
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr
}

function pivotHelper(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start]
    var swapIdx = start

    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIndex = pivotHelper(arr, left, right)
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([-100, 0, 4,8,2,1,5,7,6,3]))