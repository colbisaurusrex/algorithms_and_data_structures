/*
    Linear search simply iterates through a collection one by one in order to see if it's the value we want.
        - indexOf
        - includes
        - find
        - findIndex
    Big 0
        - Best: O(1)
        - Worst: O(n)
*/
const mockData  = require('../mockData.js')

const { states } = mockData

const linearSearch = ({ item, collection = [] }) => {
    for(var i = 0; i < collection.length; i++) {
        if(collection[i] === item) return i
    }
    return -1
}

const wv = linearSearch({ item: 'West Virginia', collection: states})
console.log(wv)