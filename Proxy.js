//handling negative index in arrays using proxy

const myArray = [10, 20, 30];

const handler = {
  get(target, prop, receiver) {
    if (prop < 0) {
      // Handle negative indexes here
      const positiveIndex = target.length + parseInt(prop);
      if (positiveIndex >= 0 && positiveIndex < target.length) {
        return target[positiveIndex];
      } else {
        return undefined;
      }
    }
    // Default behavior for non-negative indexes
    return Reflect.get(target, prop, receiver);
  }
};

const proxyArray = new Proxy(myArray, handler);

console.log(proxyArray[-1]); // Outputs: 30 
console.log(proxyArray[-2]); // Outputs: 20
console.log(proxyArray[-4]); // Outputs: undefined
