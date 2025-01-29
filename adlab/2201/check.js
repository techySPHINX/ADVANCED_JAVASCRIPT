// var a = 10
// var b = '10';

// console.log(a == b);
// console.log(a === b);

// var a = [1, 2, 3];
// var b =  [1, 2, 3];

// console.log(a == b);
// console.log(a === b);

//see when the adress is assigned in stack and that adress is stored in heap.

// var a1 = [1, 2, 3];
// var a2 = a1; // referencing to single address 

// console.log(a1 == a2); 
// console.log(a1 === a2);

// a2 = [1, 2, 3];

// console.log(a1 == a2); 
// console.log(a1 === a2);

// console.log('a1 length:', a1.length);
// console.log('a2 length:', a2.length());

// a1.push(4);
// console.log(' push:', a1);

// a1.pop();
// console.log('pop:', a1);

// a1.shift();
// console.log('shift:', a1);

// a1.unshift(0);
// console.log('unshift:', a1);

// a1.splice(1, 1, 5);
// console.log('splice:', a1);

// var mappedArrayArrow = a1.map(ele => ele * 2);
// console.log('map with arrow function:', mappedArrayArrow);

// function multiplyByTwo(ele) {
//  return ele * 2;
// }
// var mappedArrayNamed = a1.map(multiplyByTwo);
// console.log('map with named function:', mappedArrayNamed);

// var mappedArrayInline = a1.map(function(ele) {
//  return ele * 2;
// });
// console.log('map with inline callback function:', mappedArrayInline);

// var mappedArray = a1.map(function(ele) {
//  return ele * 2;
// });
// console.log('map:', mappedArray);

// var filteredArray = a1.filter(function(ele) {
//  return ele > 1;
// });
// console.log('filter:', filteredArray);

var str1 = "Hello, ";
var str2 = "world!";
var concatenatedStr = str1 + str2;
console.log('Concatenated string:', concatenatedStr);

var slicedStr = str1.slice(0, 5);
console.log('Sliced string:', slicedStr);

var substringStr = str1.substring(0, 4);
console.log('Substring:', substringStr);

var substrStr = str1.substr(0, 5);
console.log('Substr:', substrStr);

var splitStr = str1.split('');
console.log('Split string:', splitStr);

var joinedStr = splitStr.join('');
console.log('Joined string:', joinedStr);

var upperStr = str1.toUpperCase();
console.log('Uppercase string:', upperStr);

var lowerStr = str2.toLowerCase();
console.log('Lowercase string:', lowerStr);

var replacedStr = str1.replace('Hello', 'Hi');
console.log('Replaced string:', replacedStr);

var includesStr = str1.includes('Hello');
console.log('Includes "Hello":', includesStr);

var startsWithStr = str1.startsWith('He');
console.log('Starts with "He":', startsWithStr);

var endsWithStr = str2.endsWith('!');
console.log('Ends with "!":', endsWithStr);

var trimmedStr = "   Hello, world!   ".trim();
console.log('Trimmed string:', trimmedStr);

var charAtStr = str1.charAt(1);
console.log('Character at index 1:', charAtStr);

var charCodeAtStr = str1.charCodeAt(1);
console.log('Character code at index 1:', charCodeAtStr);

var indexOfStr = str1.indexOf('e');
console.log('Index of "e":', indexOfStr);

var lastIndexOfStr = str1.lastIndexOf('l');
console.log('Last index of "l":', lastIndexOfStr);

var repeatStr = str1.repeat(3);
console.log('Repeated string:', repeatStr);

var str3 = "Hello, world!";
var matchStr = str3.match(/o/g);
console.log('Match "o":', matchStr);

var searchStr = str3.search('world');
console.log('Search "world":', searchStr);

var localeCompareStr = str1.localeCompare(str2);
console.log('Locale compare:', localeCompareStr);
