async function runTasksInParallel(tasks) {
    const results = await Promise.all(tasks.map(task => task()));  // Run tasks concurrently
    return results;  // Return an array of results
  }
  
  // Example tasks (assuming they are async functions)
  const task1 = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate some work
    return 'Result of task 1';
  };
  
  const task2 = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate some work
    return 'Result of task 2';
  };
  
  const task3 = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate some work
    return 'Result of task 3';
  };
  
  // Run the tasks in parallel
  runTasksInParallel([task1, task2, task3])
    .then(results => console.log('Results:', results))
    .catch(err => console.error('Error:', err));


    async function runTasksInParallelWithLoop(tasks) {
        const results = [];
        for (const task of tasks) {
          results.push(await task());  // Run tasks concurrently and collect results
        }
        return results;
      }
      
      // Usage is same as the previous example
      
  