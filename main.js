function getCount(str) {
  // Définir les voyelles à considérer
  const vowels = "aeiou";
  // Initialiser le compteur à 0
  let count = 0;
  // Parcourir chaque caractère de la chaîne
  for (let char of str) {
    // Si le caractère est une voyelle, incrémenter le compteur
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
