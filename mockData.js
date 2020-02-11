const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']


const sentence = 'Four loko blue bottle mustache photo booth letterpress echo park 90s health goth tbh man braid cold-pressed godard quinoa.'

const getUnsortedArray = (length) =>  Array.from({ length: length || 20 }, () =>  Math.floor(Math.random() * 10))

const getArrayOfNumbers = length => Array.apply(null, { length: length || 20 }).map(Function.call, Math.random)

module.exports = {
    states,
    sentence,
    getUnsortedArray,
    getArrayOfNumbers,
}