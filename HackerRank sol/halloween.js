function howManyGames(p, d, m, s) {
  let totalCost = p;
  let gameCount = 0;

  while (totalCost <= s) {
    p = p - d;
    if (p <= m) {
      totalCost = totalCost + m;
      gameCount++;
    } else {
      totalCost = totalCost + p;
      gameCount++;
    }
  }

  return gameCount;
}
