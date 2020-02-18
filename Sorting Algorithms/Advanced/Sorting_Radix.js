/*
    NOTES:
        - All of the sorting algorithms learned so far have been comparison sorts
        - Radix sort
            - not a comparison algorithm
            - works on a list of numbers
            - information about the size a number is encoded in the number of digits
            - Time Complexity:
                - Best: O(nk)
                - Average: O(nk)
                - Worst: O(nk)
                - Space Complexit: O(n + k)
*/


// returns the digit at a postion in the number
    // Math.pow(10, place) = 10 to the "place", i.e. place = 2 then 10 x 10
    // Math.abs ensures this works if num is a negative number
    // % 10  = divide by 10
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// function digitCountV1(num) {
//     return num.toString().split('').length
// }

// returns the number of digits in num
function digitCount(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// function mostDigitsV1(nums) {
//     let max = null
//     nums.forEach(num => {
//         const count = digitCount(num)
//         if(count > 0) max = count
//     })
//     return max
// }

function mostDigits(nums) {
    let maxDigits = 0
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    console.log(maxDigits)
    return maxDigits
}

// Define a function that accepts a list of numbers
// Figure out how many digits the largest number has
// Loop from k = 0 up to this largest number of digits
// For each iteration of the loop
    // create buckets for each digit (0 to 9)
    // place each number in the corresponding bucket based on its kth digit
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// return the list at the end

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for(let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    console.log(nums)
    return nums
}

radixSort([23, 345, 5467, 12, 2345, 9852])