const debounce = (func, wait) => {
  // Created a timer
  let timeout;

  // Returns a function ie called Closure
  return function mainFunction(...args) {
    // Checks if any timer exists => Clear out that timer
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};

function foo() {
  console.log("HI")
}

const bar = debounce(foo, 2000)
bar()

// Netflix example - 
// func => To call Netflix API to get movie
// wait => 1s => 1 * 1000ms = 1000ms

// Return a function is what concept called?

/* TIPs - 

arg = Arguments, 

setTimeout => Creates a timer and runs callback function when time is up
*/ 