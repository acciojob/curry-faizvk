function curry(callback) {
  return function curried(...args) {
    // If called with no arguments, invoke callback with what we have so far
    if (args.length === 0) {
      return callback();
    }

    let collected = [...args];

    function next(...more) {
      // Termination condition
      if (more.length === 0) {
        return callback(...collected);
      }

      // Accumulate and keep going
      collected.push(...more);
      return next;
    }

    return next;
  };
}

module.exports = curry;
