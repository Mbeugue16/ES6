function findOutlier(integers) {
  // On vérifie la parité des 3 premiers pour déterminer la majorité
  const firstThree = integers.slice(0, 3);
  const majorityIsEven =
    firstThree.filter(num => num % 2 === 0).length >= 2;

  // On cherche l'élément qui n'a pas la même parité
  return integers.find(num =>
    majorityIsEven ? num % 2 !== 0 : num % 2 === 0
  );
}
findOutlier([0, 1, 2])         
findOutlier([1, 2, 3])         
findOutlier([2,6,8,10,3])      
findOutlier([0,0,3,0,0])       
findOutlier([1,1,0,1,1])       
