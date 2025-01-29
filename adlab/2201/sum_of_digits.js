function sumOfDigits(number) {
 let sum = 0;
 while (number) {
  sum += number % 10;
  number = Math.floor(number / 10);
 }
 return sum;
}

const number = 1234;
console.log(`The sum of digits of ${number} is ${sumOfDigits(number)}`);
