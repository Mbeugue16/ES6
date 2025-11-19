function deleteNth(arr, n) {
  const result = [];
  const counts = {};

  for (const item of arr) {
    counts[item] = (counts[item] || 0);

    if (counts[item] < n) {
      result.push(item);
      counts[item]++;
    }
  }

  return result;
}
