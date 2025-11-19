function loop_size(node) {
  let slow = node;
  let fast = node;

  // Détection de la boucle avec l'algorithme de Floyd (tortue et lièvre)
  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (slow !== fast);

  // slow et fast sont maintenant dans la boucle
  let count = 1;
  let current = slow.next;

  while (current !== slow) {
    count++;
    current = current.next;
  }

  return count;
}
