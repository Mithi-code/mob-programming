function birthdayCakeCandles(candles) {
  // Write your code here
  let count = 0;
  let max = 0;
  for(let i = 0; i < candles.length ; i++)
  {
      let num = candles[i];
      if(num > max)
      {
          max = num;
          count = 1;
      }else if(max == num)
      {
          count++;
      }
  }
  return count;
}