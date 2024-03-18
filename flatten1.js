//flatten in array

//universal to all types in nesting

//I am following recursive approach for all types of nesting array could be fit under this rule

function flattenArray(arr) {
    return arr.reduce((prevVal, currentVal)  => {
    if(Array.isArray(currentVal)){
        prevVal = prevVal.concat(flattenArray(currentVal))
    }else{
        prevVal.push(currentVal)
    }
    return prevVal;

    }, [])
}

console.log(flattenArray([1, [2, 3], 4]));

//below one is better approach
//another approach towards flattening
function flatten(arr) {
    const flattened = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattened.push(...flatten(item));  // Recursive call for nested arrays
      } else {
        flattened.push(item);
      }
    }
    return flattened;
  }
  
  const flattenedArray1 = flatten([1, [2, [3, 4]], 5, [6, [7, 8, [9]]]]);
  console.log(flattenedArray1); // [1, 2, 3, 4]
  