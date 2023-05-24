function repeatedString(s, n) {
    // Write your code here
   let occurances = (s.split("a").length - 1);
   let max = Math.floor(n / s.length);
   let totalAs= occurances * max;
   totalAs += (s.slice(0, n % s.length).split("a").length - 1);
   return totalAs;
}
repeatedString('gysvh', 2)