function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction(named) {
  return function named() {};
}

function returnsAnAnonymousFunction() {
  return () => {};
}
