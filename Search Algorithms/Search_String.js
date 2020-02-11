const mockData  = require('../mockData.js')

const { sentence } = mockData


/*

*/


function naiveSearch(long, short) {
    let counter = 0
    for(var i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break
            if(j === short.length - 1) counter++
        }
    }
    return counter
}

const answer = naiveSearch(sentence, 'four')
console.log('Answer ===>', answer)


function knpSearch(long, short) {
    // preprocess long string
}