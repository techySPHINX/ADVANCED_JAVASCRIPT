function jsonStringify(obj, replacer = null, space = '') {
    // Handle null, undefined, primitives
    if (obj == null) {
      return JSON.stringify(obj);  // Use built-in for these
    }
  
    // Type checking and handling
    switch (typeof obj) {
      case 'string':
        return `"${obj.replace(/"/g, '\\"')}"`;  // Escape quotes
      case 'number':
      case 'boolean':
        return JSON.stringify(obj);  // Use built-in for numbers and booleans
      case 'object':
        // Handle arrays and objects
        const type = Array.isArray(obj) ? '[]' : '{}';
        const inner = Object.entries(obj)
          .map(([key, value]) => `${space}"${key.replace(/"/g, '\\"')}": ${jsonStringify(value, replacer, space + '  ')}`)
          .join(`${space},`);
        return `${type}${inner ? `${space}\n` : ''}${inner}${space}`;
      default:
        // Handle other types by returning null (or handle them differently if needed)
        return null;
    }
  }
  
  // Example usage
  const person = {
    name: 'Alice',
    age: 30,
    city: 'New York',
    skills: ['JavaScript', 'Python'],
  };
  
  const jsonString = jsonStringify(person, null, 2);
  console.log(jsonString);
  