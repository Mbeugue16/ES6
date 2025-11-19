function findNb(m) {
  let n = 0;
  let sum = 0;

  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }

  return sum === m ? n : -1;
}
findNb(4183059834009); 
findNb(24723578342962); 
findNb(135440716410000); 
findNb(40539911473216); 
