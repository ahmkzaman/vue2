//Exercise 1
function destructureExample(obj, arr){
    const {name, age} = obj
    const firstEl = arr[0]
    const thirdEl = arr[2]
const person ={
    name,
    age,
    firstEl,
    thirdEl
}
return(person)

}
const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 30, 40]
console.log(destructureExample(obj, arr));

//Exercise 2

function sumNumbers(...allNnumbers){
    return allNnumbers.reduce((sum, num) => sum + num, 0) 
}
console.log(sumNumbers(1,6,9,11))

//Exercise 3

function createGreeting(name){
    return `Hello, ${name}!, Welcome to our website.`

}
console.log(createGreeting('Zaman'))

//Exercise 4

function isEven(number){
    return number % 2 === 0 ? 'Even':'Odd'
}
console.log(isEven(8))

//Exercise 5

const multiply = (a,b) => a*b;

// Exercise 6
function getLargestNumber(num1, num2){
    return num1>num2&&num1||num2
}

//Exercise 7

function getAddressCity(address) {
    return address?.city ?? "Unknown"
}
const address = { street: '123 Main St', country: 'USA' }
console.log(getAddressCity(address))

//Exercise 8
function doubleNumbers(numbers){
    return numbers.map((num)=>num *2)
}
console.log(doubleNumbers([1,2,3,4,5]))

//Exercise 9
function filterEvenNumbers(evenNum){
    return evenNum.filter((even) => even % 2 ===0)

}
console.log(filterEvenNumbers([1,2,3,4,5,6]))

//Exercise 10
function sumArray(arrTotal){
    return arrTotal.reduce((counter, currentVlue) => counter+currentVlue, 0)
}
console.log(sumArray([1,2,3,4,5]))