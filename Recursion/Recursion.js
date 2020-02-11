/*
    NOTES:
        - What is recursion?
            - a process that calls itself
        - Two essential components of a recursive function
            - Base case -> where the recursion stops
            - Different input
        - Visualize the callstack
            - recursion keeps pushing the same function onto the call stack over and over
        - Helper vs pure recursion
            - Helper:
                - good for collecting data
        - Where things go wrong?
            - no base case (or the base case is wrong)
            - forgetting to return(or returning the wrong thing)
            - stack overflow
        - Recursion depth
            - recursion depth equals the maximal number of context in the stack.
        - Execution context
        - "Any recursion can be rewritten as a loop. The loop variant usually can be made more effective"
            - loops take less memory because they need less memory for "context"
        - "Recursion can give a shorter code, easier to understand and support. Optimizations are not required in every place, mostly we need a good code, that’s why it’s used."
*/

const countDown = num => {
    if(num <= 0) {
        console.log('Done!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}

// countDown(10)


/* -------------------------------- */

const sumRange = num => {

    if(num === 1) {
        return 1
    }
    return num + sumRange(num - 1)
}

const w = sumRange(9)
/*
    sumRange(3)
        return 3 + sumRange(2)
            return 2 + sumRange(1)
                return 1
*/


const makeTree = (categories, parent) => {
    let node = {}
    categories
        .filter(c => c.parent === parent) // <--- I guess this is kind of a base case cause it could return an empty array
        .forEach(c => {
            node[c.id] = makeTree(categories, c.id)
        })
    return node
}


/* Factorial */

// iterative solution
const factorial = num => {
    let total = 1
    for(let i = num; i > 0; i--) {
        total *= i
    }
    return factorial
}

// recursive solution

const recursiveFactorial = num => {
    // base case
    if(num === 1) return 1
    return num * recursiveFactorial(num - 1)
}


// 3 * 2 * 1
/*
    Now that our function has finally returned, everything will ‘unwind’. This is because recursion is simply a group of nested function calls. With nested functions, the most inner nested function will return first.
*/
// Now that we've hit our base case, our function will return in order from inner to outer:
console.log(recursiveFactorial(8))

const reverseString = str => {
    if(str === '') return ''
    return reverseString(str.substr(1)) + str[0]
}

/*
revStr('')     returns                ''  => ''
revStr('t')    returns revStr('') +   't' => '' + 't'
revStr('at')   returns revStr('t') +  'a' => '' + 't' + 'a'
revStr('cat')  returns revStr('at') + 'c' => '' + 't' + 'a' + 'c'
*/
console.log(reverseString('I\'m on a boat'))
// str.substr('og') + d returns 'god'
    // str.substr('g') + o returns 'go'
    // str.substr('') return ''
// god


/* HELPER */

const numberCollection = [1, 2, 45, 62, 34, 55, 788, 896, 10, 4, 31, 25, 27]

const helperCollectOdds = nums => {
    let result = []
    const helper = input => {
        if(input.length === 0) return
        if(input[0] % 2 !== 0) {
            result.push(input[0])
        }
        helper(input.slice(1))
    }
    helper(nums)
    return result
}
console.log('helper collected odds', helperCollectOdds(numberCollection))


/* PURE */
// This one is the one I find more confusing
const pureCollectOdds = nums => {
    let newArr = []
    if(nums.length === 0) return newArr
    if(nums[0] % 2 !== 0) newArr.push(nums[0])

    newArr = newArr.concat(pureCollectOdds(nums.slice(1)))
    return newArr
}
console.log('pure collected odds', pureCollectOdds(numberCollection))

// First one I solved with no help :)
const pow = (num, power) => power === 0 ? 1 : num * pow(num, power - 1)
// recursion depth = value of powerr
console.log(pow(2, 4))



/* TRAVERSAL */

let company = {
    sales: [{
      name: 'John',
      salary: 1000
    }, {
      name: 'Alice',
      salary: 600
    }],

    development: {
      sites: [{
        name: 'Peter',
        salary: 2000
      }, {
        name: 'Alex',
        salary: 1800
      }],

      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  }

const sumSalaries = department => {
    if(Array.isArray(department)) {
        return department.reduce((acc, person) => acc + person.salary, 0)
    } else {
        let sum = 0
        for(let subdep of Object.values(department)) {
            sum += sumSalaries(subdep)
        }
        return sum
    }
}

console.log(sumSalaries(company))


/* LINKED LIST */

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }

function iteratvieFibonacci(num){
    var a = 1, b = 0, temp;

    while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}

iteratvieFibonacci(6)

    // temp = 1
    // a = 1 + 0
    // b = 1
    // num = 5


    //
function recursiveFibonacci(num) {
    if (num <= 1) return 1;

    return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

recursiveFibonacci(6)


function memoizedFibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = memoizedFibonacci(num - 1, memo) + memoizedFibonacci(num - 2, memo);
  }
