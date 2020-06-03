module.exports = function range(start, end, step = 1) {
  let result = [];
  step = Math.abs(step);

  if (start < end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= step) {
      result.push(i);
    }
  }
  return result;
}
