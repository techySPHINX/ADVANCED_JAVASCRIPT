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

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

console.log(isPrime(11));
console.log(isPrime(15)); 

const reverseNumber = (num) => {
 return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
};

console.log(reverseNumber(12345));
console.log(reverseNumber(-6789));

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5)); 

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); 





