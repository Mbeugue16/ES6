function deleteNth(arr, n) {
  const counts = {};
  const result = [];

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] <= n) {
      result.push(num);
    }
  }

  return result;
}

function countBits(n) {
  return n.toString(2).replace(/0/g, '').length;
}

module.exports = { deleteNth, countBits };
