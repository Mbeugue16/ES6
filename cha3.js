function getMiddle(s) {
  const len = s.length;
  const middle = Math.floor(len / 2);

  if (len % 2 === 0) {
    // longueur paire : renvoyer 2 caractères du milieu
    return s[middle - 1] + s[middle];
  } else {
    // longueur impaire : renvoyer le caractère du milieu
    return s[middle];
  }
}
