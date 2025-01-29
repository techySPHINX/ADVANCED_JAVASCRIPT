function isArmstrongNumber(num) {
 let sum = 0;
 let temp = num;
 const numDigits = num.toString().length;

 while (temp > 0) {
  let digit = temp % 10;
  sum += Math.pow(digit, numDigits);
  temp = Math.floor(temp / 10);
 }

 return sum === num;
}

console.log(isArmstrongNumber(153)); 
console.log(isArmstrongNumber(123));
