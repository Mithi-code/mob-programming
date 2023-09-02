// breaking records
function breakingRecords(scores) {

    let highScore = scores[0], lowScore = scores[0], highCount = 0, lowCount = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highScore) {
            highScore = scores[i];
            highCount += 1;
        } else if (scores[i] < lowScore) {
            lowScore = scores[i];
            lowCount += 1;
        }
    }

    return [highCount, lowCount];
}

//number-line jumps
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let   firstKangaroo = x1 + v1;
    let   secondKangaroo= x2 + v2;
    let   lineJump = false; 
    let   maxLimit =  10000;
    for(let i = 0; i <= maxLimit; i++) {
        if(firstKangaroo == secondKangaroo){
            lineJump = true;
            break;
        } else
         {  firstKangaroo += v1; 
            secondKangaroo += v2;
        }
    }
     return lineJump ? "YES" : "NO";

}

//staircase
function staircase(n) {
    // Write your code here
    var line = '';
    for(let i = 1; i <n +1; i++) {
        line += Array(n-i).fill(' ').join('')
        line += Array(i).fill('#').join('')
        console.log(line)
        line = ''
    }

}

staircase(7)

// compare triplates
function compareTriplets(a, b) {
  let first = 0, second = 0
  for (let i=0; i< a.length; i++){
      if(a[i] > b[i]) {
          first += 1
      } else if(a[i] < b[i]){
          second += 1
      } else {
          first = first
          second = second
      }
  }
    return [first, second]
}

// birthday candles

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


// grading student
function gradingStudents(grades) {
  // Used map high order array method to single out each element in array
  return grades.map((n) => {
    // find the difference after division with 5
      let difference = 5 - (n % 5);
    // make our test cases and add the erence if condition is true
      if(difference < 3 && n >= 38) {
          n += difference;
      }
      return n;
  })
}

// diagonal diff

function diagonalDifference(arr) {
    // Write your code here
  let diagonal1 = 0, diagonal2 = 0
  for(let i = 0; i<arr.length; i++){
      diagonal1 += arr[i][i]
      diagonal2 += arr[arr.length -1-i][i]
  }
    return Math.abs(diagonal2 - diagonal1)
}

// plus-minus
function plusMinus(arr) {
    // Write your code here
    let positives = 0, negatives = 0, zeros = 0;
     const len = arr.length || 0;
      
     if (len > 0 && len <= 100) {
          arr.map((elem, key) => {
               if (elem > 0) {
                    positives++;
               } else if (elem < 0) {
                    negatives++; 
               } else {
                    zeros++;
               }
                  
               return elem; 
          }); 
     } 
     
     console.log((positives / len) || 0);
     console.log((negatives / len) || 0);
     console.log((zeros / len) || 0);     

}

// countinxg vallyes

function countingValleys(steps, path) {
  let valleys=0
  let altitude=0
  for(let i=0;i<steps;i++){
    // if path is 'D' we decrement the altitide
    if(path[i]=='D'){
      altitude--
    }else{
      // this means a down and up movement suggesting a valley passed
      if(altitude == -1){
        valleys++
      }
      // else we increment the altititude
      altitude++
    }
  }
  return valleys
}

// time conversion 
function timeConversion(s) {
    // Write your code here
  let timeFormat = s.substring(8)
  let fullTime = s.substring(0,8)
  let times = fullTime.split(':')
if(timeFormat == 'PM'){
  if(times[0] !== '12'){
     times[0] = parseInt(times[0]) + 12
  }
}else {
   if(times[0] === '12'){
      times[0] = '00'
   }
}

return times.join(':')

}

//jumpinxg on clouds revisited

function jumpingOnClouds(c, k) {
let energyLevel = 100;
   for( let i = k ; i != 0 ; i+=k ){
      if( i >= c.length ) i = i - c.length;
      energyLevel = energyLevel - 1;
      if( c[i] == 1 ) energyLevel = energyLevel - 2;
      if( i == 0 ) break;
   }
   return energyLevel;

}

// anxgry prof
function angryProfessor(k, a) {
    // Write your code here
  let count = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] <= 0) {
          count += 1
      }
  }

  return count >= k ? "NO" : "YES";
}

// halloween sale
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

// repeat string
function repeatedString(s, n) {
    // Write your code here
   let occurances = (s.split("a").length - 1);
   let max = Math.floor(n / s.length);
   let totalAs= occurances * max;
   totalAs += (s.slice(0, n % s.length).split("a").length - 1);
   return totalAs;
}
repeatedString('gysvh', 2)

// jumpinxg on clouds

function jumpingOnClouds(c) {
  // Write your code here
   var stepsArray = [];
 
  let i=0;
  while(i < c.length - 1){
     
      if ((i+2<c.length) && (c[i+2] === 0)) {
          stepsArray.push(c[i + 2]);
          i+=2;
      } else{
          stepsArray.push(c[i + 1]);
          i+=1;
      } 
      
  }
  return stepsArray.length

}

//recursive dixgit sum

function superDigit(n, k) {
if (n.length === 1) return n
const digit = (n.split('').reduce((res, d) => res + Number(d), 0) * k) + ''
return superDigit(digit, 1)
}

// max-min
function maxMin(k, arr) {
  // Sort the array numerically
  arr = arr.sort((a, b) => a - b);
  
  let i, length = arr.length, min = Number.MAX_VALUE;
  
  for(i = 0; i < length - k + 1; i++) {
    let diff = arr[i + k - 1] - arr[i];
    if(diff < min)
      min = diff;
  }
 
  return min; 
}
// super reduced strinxg
function superReducedString(s) {
  const stack = [];
  
  for (let char of s) {
    // If the stack is not empty and the current character matches the character at the top of the stack, pop it.
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      // Otherwise, push the current character onto the stack.
      stack.push(char);
    }
  }
  
  // If the stack is empty, return "Empty String"; otherwise, join the characters in the stack to form the reduced string.
  return stack.length === 0 ? "Empty String" : stack.join("");
}

// Example usage:
const inputString = "abba";
const result = superReducedString(inputString);
console.log(result); // Output: "Empty String"
// Bill Division
function bonAppetit(bill, k, b) {
  // Calculate the total cost of the items excluding the item that Anna didn't eat
  let totalCost = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      totalCost += bill[i];
    }
  }

  // Calculate the actual share of each person
  const annaShare = totalCost / 2;

  // Check if Anna was overcharged or not
  if (annaShare === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaShare);
  }
}

//Between two sets 
function gcd(a, b) {
  // Calculate the greatest common divisor (GCD) using Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // Calculate the least common multiple (LCM) using GCD
  return (a * b) / gcd(a, b);
}
function getTotalX(a, b) {
    // Write your code here
 let lcmValue = a[0];
  for (let i = 1; i < a.length; i++) {
    lcmValue = lcm(lcmValue, a[i]);
  }

  // Calculate the GCD of the second array
  let gcdValue = b[0];
  for (let i = 1; i < b.length; i++) {
    gcdValue = gcd(gcdValue, b[i]);
  }

  // Count the multiples of lcmValue that evenly divide gcdValue
  let count = 0;
  for (let i = lcmValue; i <= gcdValue; i += lcmValue) {
    if (gcdValue % i === 0) {
      count++;
    }
  }

  return count;
}

