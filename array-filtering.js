let numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = number => number%2===0;
numbers = numbers.filter(evenNumbers)
console.log(numbers);
