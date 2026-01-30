function curry(callback) {
  return function (...initial) {
    // If called with no args initially
    if (initial.length === 0) return callback();

    let collected = [...initial];
    let calledAgain = false;

    function next(...more) {
      // termination
      if (more.length === 0) {
        return callback(...collected);
      }

      calledAgain = true;
      collected.push(...more);
      return next;
    }

    // If user does NOT chain, return result immediately
    // Cypress does: curriedSum(1,2,3)
    // so we must compute now
    if (!calledAgain) {
      return callback(...collected);
    }

    return next;
  };
}

module.exports = curry;
