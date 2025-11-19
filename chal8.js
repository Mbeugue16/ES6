function digitalRoot(n) {
  if (n < 10) return n;          // Si déjà un seul chiffre → terminé
  
  const sum = n
    .toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
  
  return digitalRoot(sum);       // On recommence jusqu’à 1 chiffre
}
digitalRoot(16);  // 1 + 6 = 7
digitalRoot(456); // 4 + 5 + 6 = 15 → 1 + 5 = 6
