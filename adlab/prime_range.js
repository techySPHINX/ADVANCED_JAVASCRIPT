function sieveOfEratosthenes(start, end) {
 let primes = new Array(end + 1).fill(true);
 primes[0] = primes[1] = false; 

 for (let i = 2; i * i <= end; i++) {
  if (primes[i]) {
   for (let j = i * i; j <= end; j += i) {
    primes[j] = false;
   }
  }
 }

 let primeNumbers = [];
 for (let i = start; i <= end; i++) {
  if (primes[i]) {
   primeNumbers.push(i);
  }
 }

 return primeNumbers;
}

const start = 10;
const end = 50;
const primeNumbers = sieveOfEratosthenes(start, end);
console.log(`Prime numbers between ${start} and ${end}:`, primeNumbers);
console.log("Time Complexity: O(n log log n)");

// Function to calculate the greatest common divisor (GCD) using Euclidean algorithm
function gcd(a, b) {
 while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
 }
 return a;
}

const num1 = 56;
const num2 = 98;
console.log(`GCD of ${num1} and ${num2}:`, gcd(num1, num2));

// Function to calculate the least common multiple (LCM)
function lcm(a, b) {
 return (a * b) / gcd(a, b);
}

console.log(`LCM of ${num1} and ${num2}:`, lcm(num1, num2));

// Function to check if a number is a perfect square
function isPerfectSquare(num) {
 return Number.isInteger(Math.sqrt(num));
}

const number = 49;
console.log(`${number} is a perfect square:`, isPerfectSquare(number));

// Function to generate Fibonacci sequence up to n terms
function generateFibonacci(n) {
 let fib = [0, 1];
 for (let i = 2; i < n; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
 }
 return fib;
}

const terms = 10;
console.log(`First ${terms} terms of Fibonacci sequence:`, generateFibonacci(terms));
