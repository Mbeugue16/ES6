function bouncingBall(h, bounce, window) {
  // Vérification des conditions d'expérience valide
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 0;
  while (h > window) {
    // La mère voit la balle en tombant
    count++;
    // La balle rebondit
    h = h * bounce;
    // La mère voit la balle en remontant si elle dépasse la fenêtre
    if (h > window) {
      count++;
    }
  }

  return count;
}
bouncingBall(3.0, 0.66, 1.5);  // → 3
bouncingBall(30.0, 0.66, 1.5); // → 15
bouncingBall(3.0, 1.0, 1.5);   // → -1 (bounce non valide)
