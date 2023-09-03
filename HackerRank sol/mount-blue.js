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

// find median
function findMedian(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  const length = arr.length;
  
  // Check if the array has an odd or even number of elements
  if (length % 2 === 1) {
    // If the number of elements is odd, return the middle element
    return arr[Math.floor(length / 2)];
  } else {
    // If the number of elements is even, return the average of the two middle elements
    const middle1 = arr[length / 2 - 1];
    const middle2 = arr[length / 2];
    return (middle1 + middle2) / 2;
  }
}

//Divisible sum pairs
function divisibleSumPairs(n, k, ar) {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        count++;
      }
    }
  }

  return count;
}

// subarray division
function birthday(s, d, m) {
  let count = 0;

  // Iterate through the array from 0 to (length - m)
  for (let i = 0; i <= s.length - m; i++) {
    let sum = 0;

    // Calculate the sum of the current subarray of length m
    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }

    // If the sum matches the target day, increment the count
    if (sum === d) {
      count++;
    }
  }

  return count;
}
// hurdle race
function hurdleRace(k, height) {
  // Find the maximum height among the hurdles
  const maxHurdleHeight = Math.max(...height);

  // Calculate the doses needed (if any)
  const dosesNeeded = maxHurdleHeight - k;

  // Return the number of doses needed, or 0 if no doses are needed
  return dosesNeeded > 0 ? dosesNeeded : 0;
}

//Mars exploration

function marsExploration(s) {
  const expectedSignal = "SOS";
  let corruptedCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== expectedSignal[i % 3]) {
      corruptedCount++;
    }
  }

  return corruptedCount;
}

// cat and mouse
function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z); // Distance of Cat A from the mouse
  const catB = Math.abs(y - z); // Distance of Cat B from the mouse

  if (catA < catB) {
    return "Cat A"; // Cat A reaches the mouse first
  } else if (catB < catA) {
    return "Cat B"; // Cat B reaches the mouse first
  } else {
    return "Mouse C"; // Both cats reach the mouse at the same time
  }
}

// Tower Breaker
function towerBreakers(n, m) {
    // Write your code here
      if (m === 1 || n % 2 === 0) {
    return 2; // Second player wins
  } else {
    return 1; // First player wins
  }
}

// CamleCase
function camelcase(s) {
  let wordCount = 1; // Initialize the count to 1 for the first word

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Check if the current character is an uppercase letter (indicating the start of a new word)
    if (char === char.toUpperCase()) {
      wordCount++;
    }
  }

  return wordCount;
}

//Sequence Equation
function permutationEquation(p) {
  const result = [];

  // Iterate through each element of the sequence
  for (let x = 1; x <= p.length; x++) {
    // Find the index of x in the sequence (p.indexOf(x) + 1) and
    // then find the index of the result of the previous step in the sequence
    result.push(p.indexOf(p.indexOf(x) + 1) + 1);
  }

  return result;
}

//Love letter Mystery

function theLoveLetterMystery(s) {
  let operations = 0;
  const length = s.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const leftChar = s[i];
    const rightChar = s[length - 1 - i];
    const diff = Math.abs(leftChar.charCodeAt(0) - rightChar.charCodeAt(0));
    operations += diff;
  }

  return operations;
}

// Making Anagrams
function makingAnagrams(s1, s2) {
    // Create character frequency maps for both strings
    const charCount1 = new Map();
    const charCount2 = new Map();

    // Populate the frequency maps for s1
    for (const char of s1) {
        charCount1.set(char, (charCount1.get(char) || 0) + 1);
    }

    // Populate the frequency maps for s2
    for (const char of s2) {
        charCount2.set(char, (charCount2.get(char) || 0) + 1);
    }

    // Calculate the number of deletions needed
    let deletions = 0;

    // Iterate through the first frequency map
    for (const [char, count] of charCount1) {
        if (!charCount2.has(char)) {
            // If a character is not in s2, delete it from s1
            deletions += count;
        } else {
            // If a character is in both strings, calculate the difference in counts
            deletions += Math.abs(count - charCount2.get(char));
        }
    }

    // Iterate through the second frequency map to find characters unique to s2
    for (const [char, count] of charCount2) {
        if (!charCount1.has(char)) {
            // If a character is not in s1, delete it from s2
            deletions += count;
        }
    }

    return deletions;
}

// Intro tutorial 
function introTutorial(V, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === V) {
      return i;
    }
  }
  return -1; // Return -1 if V is not found in the array
}

// lonely integer
function findLonelyInteger(arr) {
  let lonelyInteger = 0;

  // XOR all elements in the array
  for (let i = 0; i < a.length; i++) {
    lonelyInteger ^= a[i];
  }

  return lonelyInteger;
}

//Alternative characters
function alternatingCharacters(s) {
  let deletions = 0;

  // Iterate through the string from the second character
  for (let i = 1; i < s.length; i++) {
    // If the current character is the same as the previous one, increment the deletions count
    if (s[i] === s[i - 1]) {
      deletions++;
    }
  }

  return deletions;
}

//migratory bird

function migratoryBirds(arr) {
    // Create a map to store the count of each bird type
    const birdCount = new Map();

    // Initialize variables to keep track of the most common bird type and its count
    let mostCommonBird = 0;
    let maxCount = 0;

    // Iterate through the array of bird sightings
    for (const bird of arr) {
        // Increment the count for the current bird type
        birdCount.set(bird, (birdCount.get(bird) || 0) + 1);

        // Check if the count for the current bird type is greater than the current maxCount
        if (birdCount.get(bird) > maxCount) {
            maxCount = birdCount.get(bird);
            mostCommonBird = bird;
        } else if (birdCount.get(bird) === maxCount && bird < mostCommonBird) {
            // If two bird types have the same max count, choose the one with the lower type (numerically)
            mostCommonBird = bird;
        }
    }

    return mostCommonBird;
}

// caesar cipher

function caesarCipher(s, k) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Initialize an empty string to store the result
  let result = '';

  // Iterate through each character in the input string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // Check if the character is a lowercase letter
    if (alphabet.includes(char)) {
      const index = alphabet.indexOf(char);
      const newIndex = (index + k) % 26; // Calculate the new index after shifting
      result += alphabet[newIndex];
    }
    // Check if the character is an uppercase letter
    else if (upperAlphabet.includes(char)) {
      const index = upperAlphabet.indexOf(char);
      const newIndex = (index + k) % 26; // Calculate the new index after shifting
      result += upperAlphabet[newIndex];
    }
    // If the character is not a letter, leave it unchanged
    else {
      result += char;
    }
  }

  return result;
}

// Library Fine

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 < y2 || (y1 === y2 && m1 < m2) || (y1 === y2 && m1 === m2 && d1 <= d2)) {
    return 0; // The book was returned on time or before the expected return date
  } else if (y1 === y2 && m1 === m2) {
    return 15 * (d1 - d2); // Calculate the daily fine
  } else if (y1 === y2 && m1 > m2) {
    return 500 * (m1 - m2); // Calculate the monthly fine
  } else {
    return 10000; // The book was returned more than a year late
  }
}

//Day of the Programmer

function dayOfProgrammer(year) {
  let day = 0;
  let month = 0;

  if (year === 1918) {
    // Special case for the transition year 1918
    day = 26;
    month = 9; // September
  } else if (
    (year <= 1917 && year % 4 === 0) || // Julian leap year
    (year >= 1919 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0))) // Gregorian leap year
  ) {
    day = 12;
    month = 9; // September
  } else {
    day = 13;
    month = 9; // September
  }

  // Format the date in "dd.mm.yyyy" format
  const formattedDate = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;

  return formattedDate;
}

// Strong Password

function minimumNumber(n, password) {
  const lowercaseRegex = /[a-z]/;
  const uppercaseRegex = /[A-Z]/;
  const digitRegex = /[0-9]/;
  const specialRegex = /[!@#$%^&*()\-+]/;

  let missingCriteria = 0;

  if (!lowercaseRegex.test(password)) {
    missingCriteria++;
  }

  if (!uppercaseRegex.test(password)) {
    missingCriteria++;
  }

  if (!digitRegex.test(password)) {
    missingCriteria++;
  }

  if (!specialRegex.test(password)) {
    missingCriteria++;
  }

  // Determine how many characters to add based on the missing criteria and password length
  const lengthToAdd = Math.max(6 - n, 0);

  return Math.max(missingCriteria, lengthToAdd);
}

//Minimum Absolute Difference in an Array

function minimumAbsoluteDifference(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;

  // Calculate the absolute difference between adjacent elements
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// Electronics Shop
function getMoneySpent(keyboards, drives, b) {
    let maxMoneySpent = -1; // Initialize to -1 to represent that no combination is possible

    // Iterate through keyboards
    for (const keyboard of keyboards) {
        // Iterate through drives
        for (const drive of drives) {
            const totalCost = keyboard + drive;
            
            // Check if the total cost is within budget and greater than the current maxMoneySpent
            if (totalCost <= b && totalCost > maxMoneySpent) {
                maxMoneySpent = totalCost;
            }
        }
    }

    return maxMoneySpent;
}

// viral Adver

function viralAdvertising(n) {
  let shared = 5; // Initial number of people who share the ad
  let cumulativeLikes = 0; // Total number of likes

  for (let i = 1; i <= n; i++) {
    const liked = Math.floor(shared / 2); // Number of people who like the ad
    cumulativeLikes += liked; // Add the likes to the cumulative total
    shared = liked * 3; // Calculate the number of people who share the ad the next day
  }

  return cumulativeLikes;
}

//games of stone 
function gameOfStones(n) {
    // If n is a multiple of 7 or 1, the second player wins; otherwise, the first player wins.
    if (n % 7 === 0 || n % 7 === 1) {
        return "Second";
    } else {
        return "First";
    }
}
// save the prisoner

function saveThePrisoner(n, m, s) {
  // Calculate the index of the last prisoner who receives a sweet
  const lastPrisoner = (s + m - 1) % n;

  // Handle the case when the last prisoner is 0 (the last chair)
  return lastPrisoner === 0 ? n : lastPrisoner;
}

//Beautiful Days at the Movies
function beautifulDays(i, j, k) {
  let beautifulDayCount = 0;

  for (let day = i; day <= j; day++) {
    const reverseDay = parseInt(day.toString().split('').reverse().join(''), 10);
    const absoluteDifference = Math.abs(day - reverseDay);

    if (absoluteDifference % k === 0) {
      beautifulDayCount++;
    }
  }

  return beautifulDayCount;
}

// grid challenge

function gridChallenge(grid) {
  // Sort each row of the grid in non-decreasing order
  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('').sort().join('');
  }

  // Check if each column is in non-decreasing order
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] < grid[i - 1][j]) {
        return "NO"; // Column is not in non-decreasing order
      }
    }
  }

  return "YES"; // All columns are in non-decreasing order
}

// Sherlock and Squares

function squares(a, b) {
  // Calculate the square roots of the range endpoints
  const sqrtA = Math.ceil(Math.sqrt(a));
  const sqrtB = Math.floor(Math.sqrt(b));

  // Count the perfect squares within the range
  const count = sqrtB - sqrtA + 1;

  return count;
}

