function curry(fn) {
    // Check if the function has more arguments to be curried
    const arity = fn.length;  //calculating no of arguments
  
    return function curriedFn(arg1) {
      // If all arguments are provided, call the original function
      if (arguments.length >= arity) {
        return fn.apply(this, arguments);
      }
  
      // Otherwise, return a new function with the remaining arguments
      return function(...rest) {
        return curriedFn(...[arg1, ...rest]);
      };
    };
  }
  //like drilling of arguments from upper model to lower model with partition effect
  // Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Curried version of add
  const curriedAdd = curry(add);
  
  // Partial application to add 5 to any number
  const addFive = curriedAdd(5);
  
  // Add 5 to 10 (using the partially applied function)
  const result1 = addFive(10); // result1 will be 15
  
  // Add 3 and 7 directly using the curried function
  const result2 = curriedAdd(3)(7); // result2 will be 10

  //its like recursion method we are backtracking the functions from outer shell to inner shell with calling from inside like a hell
  
