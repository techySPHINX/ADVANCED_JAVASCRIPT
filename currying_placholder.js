function formatGreeting(greeting = "Hello", name, title = "") {
    return `${greeting}, ${title} ${name}!`;
  }
  
  const curriedGreet = curryWithPlaceholder(formatGreeting);
  
  // Full argument example (no placeholders)
  const result1 = curriedGreet("Hi")("Alice", "Ms."); // "Hi, Ms. Alice!"
  
  // Using a placeholder for the title
  const greetMs = curriedGreet("_")("Jane"); // Returns a function expecting the title
  const result2 = greetMs("Dr."); // "Hello, Dr. Jane!"
  
  // Using a placeholder for the name
  const morningGreeting = curriedGreet("Good Morning, "); // Returns a function expecting the name
  const result3 = morningGreeting("Bob"); // "Good Morning, Bob!"
  
  // Error: unexpected placeholder without additional argument
  // curriedGreet("_")(); // Throws an error

  //placeholder function call towards upper class
  