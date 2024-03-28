
//using async-await and loop
async function runTasksInSeries(tasks) {
    for (const task of tasks) {
      await task();  // Wait for each task to finish before starting the next
    }
  }
  
  // Example tasks (assuming they are async functions)
  const task1 = async () => {
    console.log('Task 1 completed');
    return 'Result of task 1';
  };
  
  const task2 = async () => {
    console.log('Task 2 completed');
    return 'Result of task 2';
  };
  
  const task3 = async () => {
    console.log('Task 3 completed');
    return 'Result of task 3';
  };
  
  // Run the tasks in series
  runTasksInSeries([task1, task2, task3])
    .then(() => console.log('All tasks completed'))
    .catch(err => console.error('Error:', err));
  

    //USING RECURSION

    async function runTasksInSeriesRecursive(tasks, index = 0) {
        if (index >= tasks.length) return; // Base case: all tasks completed
        await tasks[index]();  // Execute the current task
        runTasksInSeriesRecursive(tasks, index + 1); // Call recursively for next task
      }
      
      // Usage is same as the previous example
      