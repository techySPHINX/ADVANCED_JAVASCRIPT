//we should not do reptitive api calls
//similar to some context of debouncing

const myThrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newPack = myThrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked.....");
}, 5000);

// Consider a "like" button on social media. With throttling, the function that handles liking a post might be limited to being called only once every second. This prevents accidental double-likes due to rapid clicking and maintains server stability by limiting the rate of actions.


// Prevents unintended actions due to rapid user interactions.
// Ensures fair resource allocation by limiting function calls.
// Maintains server stability by handling bursts of user activity.