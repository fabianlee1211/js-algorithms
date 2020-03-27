module.exports = function addTogether(...thisArgs) {
  const thisSum = thisArgs.reduce((prev, curr) => {
    if (typeof curr !== 'number') return undefined;
    return prev + curr;
  }, 0);

  if (!thisSum) return undefined;

  if (thisArgs.length > 1) return thisSum;

  return function(...thatArgs) {
    const thatSum = thatArgs.reduce((prev, curr) => {
      if (typeof curr !== 'number') return undefined;
      return prev + curr;
    }, 0);

    if (!thatSum) return undefined;

    return thatSum + thisSum;
  };
};
