// Promises
// 3 states -
// Pending: Initial State, before the Promise succeeds or fails.
// Resolved: Completed Promise
// Rejected: Failed Promise, throw an error

// 1. Only the promise chain itself is asynchronous (scope)
// 2. Synchronous work can be handled in the same callback (Logic)
// 3. Multiple Promises use Promise.all() (Logic)
// 4. Then Catch Finally (Error Handling)

//Async-awit
// 1. The entire wrapper function is asynchronous (scope)
// 2. Synchronous work needs to be moved out of the callback (Logic)
// 3. Multiple Promises can be handled with simple variables. (Logic)
// 4. Try Catch Finally (Error Handling)

const returnsAPromise = (string) => {
  return new Promise((resolve, reject) => {
    if (typeof string === "string") {
      resolve(`${string} is a resolved promise now`);
    } else {
      reject("Not a string!");
    }
  });
};

const myString = "Test string";

const myPromiseFunc = (str) => {
  //Operation A
  returnsAPromise(str).then((res) => {
    //Operation B (needs info from Operation A)
    console.log(`Using promise chains ${res}`);
  });
  // Operation C
  console.log("synchronous block");
};
myPromiseFunc(myString);

const myAsyncFunc = async (str) => {
  //Operation A
  const promiseResults = await returnsAPromise(str);
  //Operation B (needs info from Operation A)
  console.log(`Using async/await ${promiseResults}`);
  console.log("Not synchronous anymore");
};
// Operation C
console.log("synchronous block");
myAsyncFunc(myString);

//To resolve multiple promises using Promise.all()
const myFirstString = "Test first string";
const mySecondString = "Test second string";
// Operation A & Operation B can run in parallel
Promise.all([
  returnsAPromise(myFirstString),
  returnsAPromise(mySecondString),
]).then((res) => {
  // Operation C needs info from Operations A & B
  console.log(`Promise.all() gives us an array: ${res}`);
});

//To resolve multiple promises using async/await
const multipleAwaits = async (str1, str2) => {
  // Operation A runs
  const promiseResult1 = await returnsAPromise(str1);
  // Then Operation B runs
  const promiseResult2 = await returnsAPromise(str2);

  // Then, Operation C runs
  console.log(`With multiple awaits, we can use the variables 
  directly: ${promiseResult1} AND ${promiseResult2}`);
};
multipleAwaits(myFirstString, mySecondString);

//Error handling with promises
let isOurPromiseFinished = false;
returnsAPromise(str)
  .then((res) => {
    // If the promise resolves, we enter this code block
    console.log(`using promise chains, ${res}`);
  })
  .catch((err) => {
    /* If the promise rejects, or if any of the code in our .then 
    statement throws, we enter this code block */
    console.log(err);
  })
  .finally(() => {
    /* This is for code that doesn't rely on the outcome of the 
    promise but still needs to run once it's handled */
    isOurPromiseFinished = true;
  });

//Error handling with Async/Await

let isOurPromiseFinished = false;
const myAsyncAwaitBlock = async (str) => {
  try {
    // If the promise resolves, we enter this code block
    const myPromise = await returnsAPromise(str);
    console.log(`using async/await, ${res}`);
  } catch (err) {
    // If the promise rejects, we enter this code block
    console.log(err);
  } finally {
    /* This is for code that doesn't rely on the outcome of the    
    promise but still needs to run once it's handled */
    isOurPromiseFinished = true;
  }
};
myAsyncAwaitBlock(myFirstString);
