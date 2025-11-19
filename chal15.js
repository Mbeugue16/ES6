function permutations(string) {
  if (string.length === 1) return [string]; // Cas de base

  const result = new Set(); // Set pour éviter les doublons

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);
    
    // Permutations récursives des caractères restants
    for (const perm of permutations(remaining)) {
      result.add(char + perm);
    }
  }

  return Array.from(result);
}
permutations('a'); 


permutations('ab'); 


permutations('aabb'); 

