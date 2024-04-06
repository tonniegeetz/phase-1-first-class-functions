function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(named) {
  return function named() {};
}

// solution
// function returnsANamedFunction() {
//   return function named() {
//     console.log("this is a named function");
//   };
// }

function returnsAnAnonymousFunction() {
  return () => {};
}

// solution
// function returnsAnAnonymousFunction() {
//   return () => {console.log("This is an anonymous function")};
// }
