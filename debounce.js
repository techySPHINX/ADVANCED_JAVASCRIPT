let counter =0 ;

function getData(){
    console.log("fetching data" + counter++)
}

function myDebounce(call, d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(() => {
            call();
        }, d);
    }
}

const betterFunction = myDebounce(getData,1000);

// Imagine a search bar where a function performs a search API call whenever the user types a character. With debouncing, the function would wait for a set delay (e.g., 500 milliseconds) after the last keystroke before making the API call. This prevents overwhelming the server with unnecessary requests as the user types quickly.

// Improves performance by reducing unnecessary function calls.
// Enhances user experience by preventing sluggish behavior due to excessive function executions.
// Reduces server load for operations like API calls


