const reverseNumber = (num) => {
 return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
};

console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-6789)); // Output: -9876
