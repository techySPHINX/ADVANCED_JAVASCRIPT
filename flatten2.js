//flaten in object

function flattenObject(obj, prefix = '') {
    const flattened = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}.${key}` : key; // Create key with prefix if needed
  
      if (typeof value === 'object' && value !== null) {
        // Recursively flatten nested objects
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        // Add key-value pair directly for non-objects
        flattened[newKey] = value;
      }
    }
    return flattened;
  }
  
  // Example object with nested properties
  const nestedObject = {
    name: 'Alice',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
    },
    hobbies: ['reading', 'hiking'],
  };
  
  // Flatten the object
  const flattened = flattenObject(nestedObject);
  console.log(flattened);

  
  