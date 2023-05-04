function arrayManipulation(n, queries) {
  // Alternative Array creation
  // const arr = '0'.repeat(n).split('').map((e) => parseInt(e));
  let zeroArr = '0'.repeat(n).split('').map((e) => parseInt(e));
  for (let j = 0; j < queries.length; j++) {
    let startIndex = queries[j][0];
    let endIndex = queries[j][1];
    let numberToAdd = queries[j][2];
    for (let i = 0; i < n; i++) {
      let index = i + 1;
      if (index >= startIndex && index <= endIndex) {
        zeroArr[i] += numberToAdd;
      }
    }
  }
  return Math.max(...zeroArr);
}