function fibonacci(num) {
    // x is representing the first term,
    // y is representing the second term, and
    // z is representing the sum of x and y.
    var answer = [];
    var x = 0;
    var y = 1;
    var z;
  
    // Since, the first two elements are fixed.
    // Storing the first two terms.
    answer.push(x);
    answer.push(y);
  
    var i = 2;
    while (i < num) {
      z = x + y;
      x = y;
      y = z;
  
      // Storing the current element
      answer.push(z);
      i = i + 1;
    }
    return answer;
  }
  
  var num = 8;
  answer = fibonacci(num);
  
  console.log("The Fibonacci series is till the 8th term is: ", answer);