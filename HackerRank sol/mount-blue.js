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

// circular array rotation


function circularArrayRotation(a, k, queries) {
  const n = a.length;
  k %= n; // Reduce the number of rotations to avoid unnecessary iterations

  // Rotate the array to the right
  const rotatedArray = [...a.slice(n - k), ...a.slice(0, n - k)];

  // Answer queries about specific positions in the rotated array
  const results = queries.map((query) => rotatedArray[query]);

  return results;
}

//Big sorting


function bigSorting(unsorted) {
  unsorted.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length; // Compare by length first
    }
    return a.localeCompare(b); // Compare lexicographically as strings
  });

  return unsorted;
}

//Equalize the array

function equalizeArray(arr) {
  // Count the frequency of each element
  const frequency = {};
  for (const num of arr) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
  }

  // Find the maximum frequency
  let maxFrequency = 0;
  for (const num in frequency) {
    if (frequency[num] > maxFrequency) {
      maxFrequency = frequency[num];
    }
  }

  // Calculate the minimum deletions needed
  const deletions = arr.length - maxFrequency;

  return deletions;
}


// Separate the Numbers

function separateNumbers(s) {
    // Write your code here
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const firstNumStr = s.substring(0, i);
        let currentNumStr = firstNumStr;
        let nextNum = BigInt(firstNumStr) + 1n; // Convert to BigInt

        while (currentNumStr.length < s.length) {
            currentNumStr += nextNum.toString();
            nextNum++;
        }

        if (currentNumStr === s) {
            console.log(`YES ${firstNumStr}`);
            return;
        }
    }

    
    console.log("NO");
}
       
//Minimum Distances


function minimumDistances(a) {
  const indices = {};

  let minDistance = Infinity;

  for (let i = 0; i < a.length; i++) {
    const num = a[i];
    if (indices[num] !== undefined) {
      const distance = i - indices[num];
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
    indices[num] = i;
  }

  return minDistance === Infinity ? -1 : minDistance;
}


// Maximum Perimeter Triangle

function maximumPerimeterTriangle(sticks) {
  // Sort the stick lengths in descending order
  sticks.sort((a, b) => b - a);

  for (let i = 0; i < sticks.length - 2; i++) {
    const a = sticks[i];
    const b = sticks[i + 1];
    const c = sticks[i + 2];

    // Check if the current triplet forms a valid triangle
    if (a < b + c) {
      return [c, b, a]; // Return the sticks in decreasing order (longest perimeter)
    }
  }

  return [-1]; // No valid triangle can be formed
}



// Pangrams


function isPangram(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Convert the input string to lowercase to handle case-insensitivity
  s = s.toLowerCase();

  // Create a Set to keep track of unique letters in the input string
  const letterSet = new Set();

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is a letter of the alphabet, add it to the Set
    if (alphabet.includes(char)) {
      letterSet.add(char);
    }
  }

  // If the Set contains all 26 letters, it's a pangram; otherwise, it's not
  return letterSet.size === 26 ? "pangram" : "not pangram";
}


// Beautiful Binary String


function beautifulBinaryString(b) {
  const targetSubstring = "010";
  let changesNeeded = 0;

  for (let i = 0; i < b.length - 2; i++) {
    const substring = b.substring(i, i + 3);

    if (substring === targetSubstring) {
      changesNeeded++;
      i += 2; // Skip the next two characters
    }
  }

  return changesNeeded;
}


// Utopian Tree


function utopianTree(n) {
  let height = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      // Spring (odd-numbered cycle): Double the height
      height *= 2;
    } else {
      // Summer (even-numbered cycle): Increase the height by 1
      height += 1;
    }
  }

  return height;
}


// Beautiful Triplets

function beautifulTriplets(d, arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] - arr[i] === d) {
        for (let k = j + 1; k < arr.length; k++) {
          if (arr[k] - arr[j] === d) {
            count++;
          }
        }
      }
    }
  }

  return count;
}


// Picking Numbers


function pickingNumbers(a) {
  const frequency = new Array(101).fill(0);

  for (const num of a) {
    frequency[num]++;
  }

  let maxSubarrayLength = 0;

  for (let i = 0; i <= 100; i++) {
    const subarrayLength = frequency[i] + frequency[i + 1];
    if (subarrayLength > maxSubarrayLength) {
      maxSubarrayLength = subarrayLength;
    }
  }

  return maxSubarrayLength;
}


// HackerRank in a String!


function hackerrankInString(s) {
  const targetWord = "hackerrank";
  let currentIndex = 0; // Index to track the current character to match

  // Iterate through the characters of the input string
  for (const char of s) {
    // If the current character matches the character in the target word, move to the next character in the target word
    if (char === targetWord[currentIndex]) {
      currentIndex++;
    }

    // If we have matched all characters in the target word, return "YES"
    if (currentIndex === targetWord.length) {
      return "YES";
    }
  }

  // If we didn't match all characters in the target word, return "NO"
  return "NO";
}


//Designer PDF Viewer 


function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const heights = {};

  // Create a map of letter heights
  for (let i = 0; i < alphabet.length; i++) {
    heights[alphabet[i]] = h[i];
  }

  // Find the maximum height of letters in the word
  let maxHeight = 0;
  for (const letter of word) {
    const height = heights[letter];
    if (height > maxHeight) {
      maxHeight = height;
    }
  }

  // Calculate the area of the rectangle
  const wordLength = word.length;
  const area = wordLength * maxHeight;

  return area;
}


// Service lane -- Note add width in function params and in result in main func


function serviceLane(n, cases, width) {
    // Write your code here
     const minWidths = [];

    for (const testCase of cases) {
        const [entry, exit] = testCase;

        if (entry >= 0 && entry <= exit && exit < n) {
            const segment = width.slice(entry, exit + 1); 
            const minWidth = Math.min(...segment);
            minWidths.push(minWidth);
        } else {
            // Handle invalid case
            minWidths.push(0);
        }
    }

    return minWidths;
}


// Luck Balance


function luckBalance(k, contests) {
  let totalLuck = 0;
  const importantContests = [];

  for (const [luck, importance] of contests) {
    totalLuck += luck;

    if (importance === 1) {
      importantContests.push(luck);
    }
  }

  // Sort important contests in descending order
  importantContests.sort((a, b) => b - a);

  // Calculate the number of important contests to lose
  const numToLose = Math.max(0, importantContests.length - k);

  // Deduct luck from the important contests that will be lost
  for (let i = 0; i < numToLose; i++) {
    totalLuck -= 2 * importantContests[i];
  }

  return totalLuck;
}


// Luck Balance

function luckBalance(k, contests) {
    const importantContests = [];
    let totalLuck = 0;

    for (const contest of contests) {
        const [luck, importance] = contest;
        totalLuck += luck;

        if (importance === 1) {
            importantContests.push(luck);
        }
    }

    importantContests.sort((a, b) => a - b);

    let totalImportantContests = importantContests.length;
    let importantContestsToWin = Math.max(0, totalImportantContests - k);

    for (let i = 0; i < importantContestsToWin; i++) {
        totalLuck -= 2 * importantContests[i];
    }

    return totalLuck;
}


//Append and Delete


function appendAndDelete(s, t, k) {
  let commonLength = 0; // Length of the common prefix between s and t

  // Find the length of the common prefix
  while (commonLength < s.length && commonLength < t.length && s[commonLength] === t[commonLength]) {
    commonLength++;
  }

  // Calculate the total operations required to delete the remaining characters in s
  const deleteOperations = s.length - commonLength;

  // Calculate the total operations required to append the remaining characters in t
  const appendOperations = t.length - commonLength;

  // Calculate the total operations needed to make s equal to t
  const totalOperations = deleteOperations + appendOperations;

  // Check if k is greater than or equal to the total operations and whether k is even or odd
  if (k >= totalOperations && (k - totalOperations) % 2 === 0 || k >= s.length + t.length) {
    return "Yes";
  } else if (k >= s.length + t.length) {
    // Special case where we can remove all characters and add them back, which takes an even number of operations
    return "Yes";
  } else {
    return "No";
  }
}


// Misère Nim

function misereNim(s) {
        // Write your code here
        let xor = s[0], totalStones = s[0];
        for(let i = 1; i < s.length; i++) {
            totalStones += s[i];
            xor = xor ^ s[i];
        }
        
        if (totalStones == s.length) {
            return totalStones % 2 == 0 ? 'First' : 'Second';
        }
        
        return xor ? 'First' : 'Second';
} 

// Gemstones


function gemstones(arr) {
  const mineralCount = {}; // To store the count of each mineral

  // Initialize the mineralCount with zeros for each possible mineral (a-z)
  for (let i = 97; i <= 122; i++) {
    mineralCount[String.fromCharCode(i)] = 0;
  }

  // Iterate through each rock and count the occurrence of each mineral
  for (const rock of arr) {
    const uniqueMinerals = new Set(rock); // Use a Set to store unique minerals in each rock

    // Increment the count for each mineral found in the current rock
    for (const mineral of uniqueMinerals) {
      mineralCount[mineral]++;
    }
  }

  // Count the number of minerals that occur in all rocks (have a count equal to the number of rocks)
  let gemstoneCount = 0;
  for (const mineral in mineralCount) {
    if (mineralCount[mineral] === arr.length) {
      gemstoneCount++;
    }
  }

  return gemstoneCount;
}


// Two strings

function twoStrings(s1, s2) {
    // Write your code here
  const charSet = new Set();
    for (const char of s1) {
    charSet.add(char);
  }
      for (const char of s2) {
    if (charSet.has(char)) {
      return "YES"; 
    }
  }
return "NO"
}

// Chocolate feast

function chocolateFeast(n, c, m) {
  let chocolatesBought = Math.floor(n / c); // Initial chocolates bought with money
  let wrappers = chocolatesBought; // Initial wrappers collected

  while (wrappers >= m) {
    const freeChocolates = Math.floor(wrappers / m); // Chocolates obtained from wrappers
    chocolatesBought += freeChocolates;
    wrappers = freeChocolates + (wrappers % m); // Remaining wrappers after exchange
  }

  return chocolatesBought;
}


// ACM ICPC Team


function acmTeam(topic) {
  let maxTopics = 0; // Maximum number of topics known by a team
  let maxTeams = 0; // Number of teams with maximum topics

  const numAttendees = topic.length;

  // Iterate through all pairs of attendees
  for (let i = 0; i < numAttendees - 1; i++) {
    for (let j = i + 1; j < numAttendees; j++) {
      let teamTopics = 0;

      // Count the number of topics known by the team
      for (let k = 0; k < topic[i].length; k++) {
        if (topic[i][k] === '1' || topic[j][k] === '1') {
          teamTopics++;
        }
      }

      // Check if the current team knows more topics than the previous maximum
      if (teamTopics > maxTopics) {
        maxTopics = teamTopics;
        maxTeams = 1; // Reset maxTeams to 1
      } else if (teamTopics === maxTopics) {
        maxTeams++; // Increment maxTeams if equal topics
      }
    }
  }

  return [maxTopics, maxTeams];
}


//Sherlock and the Valid String


function isValid(s) {
  const charCount = {}; // To store the count of each character

  // Count the occurrence of each character in the string
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  const charFrequency = Object.values(charCount); // Array of character frequencies
  const frequencyCounts = {}; // To store the count of frequencies

  // Count the occurrence of each frequency in the charFrequency array
  for (const freq of charFrequency) {
    frequencyCounts[freq] = (frequencyCounts[freq] || 0) + 1;
  }

  // If there is only one unique frequency or if there are two unique frequencies
  // and one of them has a count of 1 and can be removed to make the others equal
  if (
    Object.keys(frequencyCounts).length === 1 ||
    (Object.keys(frequencyCounts).length === 2 &&
      (frequencyCounts[1] === 1 ||
        (Math.abs(parseInt(Object.keys(frequencyCounts)[0]) - parseInt(Object.keys(frequencyCounts)[1])) === 1 &&
          (frequencyCounts[Math.min(...Object.keys(frequencyCounts))] === 1 ||
            frequencyCounts[Math.max(...Object.keys(frequencyCounts))] === 1))))
  ) {
    return "YES";
  } else {
    return "NO";
  }
}


// Gaming Array


function gamingArray(arr) {
  let max = 0; // Initialize the maximum element
  let player = 1; // Player 1 starts the game

  for (const num of arr) {
    if (num > max) {
      max = num;
      player = 1 - player; // Switch players when a new maximum is found
    }
  }

  // The last player to make a move wins
  return player === 0 ? "BOB" : "ANDY";
}


// Encryption


function encryption(s) {
  // Remove spaces and calculate the string length
  s = s.replace(/\s/g, '');
  const length = s.length;

  // Calculate the number of rows and columns
  let rows = Math.floor(Math.sqrt(length));
  let columns = Math.ceil(Math.sqrt(length));

  // Adjust rows and columns if necessary
  while (rows * columns < length) {
    if (rows < columns) {
      rows++;
    } else {
      columns++;
    }
  }

  // Create the encrypted message by reading characters column-wise
  let encrypted = '';
  for (let j = 0; j < columns; j++) {
    for (let i = j; i < length; i += columns) {
      encrypted += s[i];
    }
    encrypted += ' '; // Add a space to separate columns
  }

  return encrypted.trim(); // Remove trailing space and return the encrypted message
}


// The Time in Words


function timeInWords(h, m) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "quarter",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twenty one",
    "twenty two",
    "twenty three",
    "twenty four",
    "twenty five",
    "twenty six",
    "twenty seven",
    "twenty eight",
    "twenty nine",
  ];

  if (m === 0) {
    return `${words[h]} o' clock`;
  } else if (m === 1) {
    return `${words[m]} minute past ${words[h]}`;
  } else if (m === 15) {
    return `${words[m]} past ${words[h]}`;
  } else if (m === 30) {
    return `half past ${words[h]}`;
  } else if (m === 45) {
    return `${words[60 - m]} to ${words[h + 1]}`;
  } else if (m === 59) {
    return `${words[60 - m]} minute to ${words[h + 1]}`;
  } else if (m <= 30) {
    return `${words[m]} minutes past ${words[h]}`;
  } else {
    return `${words[60 - m]} minutes to ${words[h + 1]}`;
  }
}


// Organizing Containers of Balls


function organizingContainers(container) {
  const containerSum = [];
  const ballCount = [];

  // Calculate the sum of each container and the count of each ball type
  for (let i = 0; i < container.length; i++) {
    let sum = 0;
    let count = 0;
    for (let j = 0; j < container.length; j++) {
      sum += container[i][j];
      count += container[j][i];
    }
    containerSum.push(sum);
    ballCount.push(count);
  }

  // Sort the sums and counts arrays
  containerSum.sort((a, b) => a - b);
  ballCount.sort((a, b) => a - b);

  // If the sorted arrays are equal, it's possible to rearrange the containers
  return JSON.stringify(containerSum) === JSON.stringify(ballCount) ? "Possible" : "Impossible";
}


// Sansa and XOR


function sansaXor(arr) {
  const n = arr.length;
  let result = 0;

  // Calculate the XOR of each element that occurs even number of times
  // The elements that occur even times will cancel each other in XOR
  // So, we only need to XOR the elements that occur odd number of times
  if (n % 2 === 0) {
    return 0;
  } else {
    for (let i = 0; i < n; i += 2) {
      result ^= arr[i];
    }
    return result;
  }
}



//  The Grid Search


function gridSearch(G, P) {
  const GRows = G.length;
  const GColumns = G[0].length;
  const PRows = P.length;
  const PColumns = P[0].length;

  for (let i = 0; i <= GRows - PRows; i++) {
    for (let j = 0; j <= GColumns - PColumns; j++) {
      let found = true;

      for (let k = 0; k < PRows; k++) {
        for (let l = 0; l < PColumns; l++) {
          if (G[i + k][j + l] !== P[k][l]) {
            found = false;
            break;
          }
        }

        if (!found) {
          break;
        }
      }

      if (found) {
        return "YES";
      }
    }
  }

  return "NO";
}



// Flipping the Matrix



function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Select the four elements forming a square submatrix
      const topLeft = matrix[i][j];
      const topRight = matrix[i][2 * n - j - 1];
      const bottomLeft = matrix[2 * n - i - 1][j];
      const bottomRight = matrix[2 * n - i - 1][2 * n - j - 1];

      // Find the maximum of the four elements and add it to the sum
      maxSum += Math.max(topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return maxSum;
}



// Counter game

function counterGame(n) {
    let move = 0;
    while(n > 1) {
        let power = parseInt(Math.log2(n));
        let max = 2**power;
        if(n === max) {
            n  = parseInt(n/2);
        } else {
            n = n - max;
        }
        move++;
    }
    if(move %2 === 0) {
        return 'Richard';
    } else {
        return 'Louise';
    }
}


// Greedy Florist 

function getMinimumCost(k, c) {
  // Sort the flower prices in decreasing order
  c.sort((a, b) => b - a);

  let totalCost = 0;
  let purchaseCount = 0;
  let multiplier = 0;

  for (let i = 0; i < c.length; i++) {
    totalCost += (multiplier + 1) * c[i];
    purchaseCount++;

    if (purchaseCount === k) {
      purchaseCount = 0;
      multiplier++;
    }
  }

  return totalCost;
}


// Mark and Toys


function maximumToys(prices, k) {
  // Sort the toy prices in ascending order
  prices.sort((a, b) => a - b);

  let toysBought = 0;
  let totalCost = 0;

  for (let i = 0; i < prices.length; i++) {
    if (totalCost + prices[i] <= k) {
      totalCost += prices[i];
      toysBought++;
    } else {
      break; // Stop buying toys if the budget is exceeded
    }
  }

  return toysBought;
}



// Closest Numbers

function closestNumbers(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  let pairs = [];

  // Calculate the minimum absolute difference
  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];

    if (diff < minDiff) {
      minDiff = diff;
      pairs = [arr[i - 1], arr[i]];
    } else if (diff === minDiff) {
      pairs.push(arr[i - 1], arr[i]);
    }
  }

  return pairs;
}


// function balancedSums(arr) {
  const n = arr.length;
  
  // Calculate the total sum of the array
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += arr[i];
  }
  
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    // Calculate the right sum by subtracting the left sum and the current element from the total sum
    const rightSum = totalSum - leftSum - arr[i];
    
    // Check if the left and right sums are equal
    if (leftSum === rightSum) {
      return "YES";
    }
    
    leftSum += arr[i];
  }
  
  // If no such element is found, return "NO"
  return "NO";
}


//Flipping bits 


function flippingBits(n) {
  // Use the XOR operator (^) with a bitmask to flip the bits
  const flippedNum = n ^ 0xFFFFFFFF;
  return flippedNum >>> 0; // Ensure it's a 32-bit unsigned integer
}


// Jim and the Orders


function jimOrders(orders) {
  // Create an array to store the order numbers and their corresponding serving times
  const customerOrderTimes = [];

  // Populate the customerOrderTimes array
  for (let i = 0; i < orders.length; i++) {
    const orderNumber = i + 1; // Order numbers start from 1
    const orderTime = orders[i][0] + orders[i][1]; // Sum of order preparation time and serving time
    customerOrderTimes.push([orderNumber, orderTime]);
  }

  // Sort the array based on the calculated order times
  customerOrderTimes.sort((a, b) => a[1] - b[1]);

  // Create an array to store the final order in which Jim should serve customers
  const servingOrder = customerOrderTimes.map((order) => order[0]);

  return servingOrder;
}



// Permuting Two Arrays


function twoArrays(k, A, B) {
  // Sort array A in ascending order and array B in descending order
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const n = A.length;

  for (let i = 0; i < n; i++) {
    // Check if the sum of elements at the same index in A and B is less than k
    if (A[i] + B[i] < k) {
      return "NO"; // A permutation doesn't exist
    }
  }

  return "YES"; // A permutation exists
}


// Missing Numbers

function missingNumbers(arr, brr) {
  // Create objects to count the occurrences of elements in both arrays
  const countArr = {};
  const countBrr = {};

  // Count the occurrences of elements in arr
  for (const num of arr) {
    if (countArr[num]) {
      countArr[num]++;
    } else {
      countArr[num] = 1;
    }
  }

  // Count the occurrences of elements in brr
  for (const num of brr) {
    if (countBrr[num]) {
      countBrr[num]++;
    } else {
      countBrr[num] = 1;
    }
  }

  // Find and store missing elements in a result array
  const result = [];
  for (const num of Object.keys(countBrr)) {
    if (!countArr[num] || countBrr[num] !== countArr[num]) {
      result.push(Number(num));
    }
  }

  // Sort the result array in ascending order
  result.sort((a, b) => a - b);

  return result;
}


// Forming a Magic Square


function formingMagicSquare(s) {
  // All possible magic squares
  const magicSquares = [
    [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
    [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
    [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
    [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
    [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
    [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
    [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
    [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
  ];

  let minCost = Infinity;

  for (const magicSquare of magicSquares) {
    let cost = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        cost += Math.abs(s[i][j] - magicSquare[i][j]);
      }
    }

    minCost = Math.min(minCost, cost);
  }

  return minCost;
}



// Climbing the Leaderboard


function climbingLeaderboard(ranked, player) {
    // Write your code here
  const uniqueScores = Array.from(new Set(ranked)); // Remove duplicate scores
  const ranks = [];

  let rank = uniqueScores.length + 1; // Initialize the rank to be the worst possible rank
  let i = uniqueScores.length - 1; // Index to traverse uniqueScores

  for (const playerScore of player) {
    while (i >= 0 && playerScore >= uniqueScores[i]) {
      // Decrement the rank if Alice's score is greater than or equal to the current unique score
      rank--;
      i--;
    }
    ranks.push(rank); // Push Alice's current rank after the game
  }

  return ranks;
}


// Strange Counter 


function strangeCounter(t) {
  let cycle = 1;
  let initialValue = 3;

  while (t > initialValue) {
    t -= initialValue;
    initialValue *= 2;
    cycle++;
  }

  return initialValue - t + 1;
}



// Insertion Sort - Part 1


function insertionSortPart1(n, arr) {
  const key = arr[n - 1]; // The element to be inserted
  let i = n - 2; // Index of the last element in the sorted part of the array

  // Shift elements to the right until the correct position for key is found
  while (i >= 0 && arr[i] > key) {
    arr[i + 1] = arr[i]; // Move the larger element to the right
    console.log(arr.join(' ')); // Print the array after each shift
    i--;
  }

  arr[i + 1] = key; // Insert key at the correct position
  console.log(arr.join(' ')); // Print the array after insertion
}



// Correctness and the Loop Invariant



function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Read input from standard input (HackerRank)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let currentLine = 0;

rl.on('line', function (line) {
  inputLines.push(line);
});

rl.on('close', function () {
  // Process the input data
  const m = parseInt(inputLines[0]);
  const ar = inputLines[1].split(' ').map(Number);

  // Sort the array using insertionSort
  const sortedArray = insertionSort(ar);

  // Output: Print the sorted array
  console.log(sortedArray.join(' '));
});



// Running Time of Algorithms 


function runningTime(arr) {
    let shifts = 0; // Initialize the shift count

    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
            shifts++; // Increment the shift count
        }
        arr[j + 1] = key;
    }

    return shifts; // Return the total number of shifts
}


// insertion sort2

function insertionSort2(n, arr) {
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;

    // Print the current state of the array
    console.log(arr.join(' '));
  }
}


// Counting Sort 2 

function countingSort(arr) {
  // Find the maximum element in the array to determine the counting range
  const max = Math.max(...arr);

  // Initialize a counting array with zeros
  const count = Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (const num of arr) {
    count[num]++;
  }

  // Reconstruct the sorted array from the counting array
  const sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      sortedArr.push(i);
    }
  }

  return sortedArr;
}


// Manasa and Stones 


function stones(n, a, b) {
  const possibleStones = new Set();

  for (let i = 0; i < n; i++) {
    const stone = i * a + (n - 1 - i) * b;
    possibleStones.add(stone);
  }

  return Array.from(possibleStones).sort((x, y) => x - y);
}


// Largest Permutation


function largestPermutation(k, arr) {
  const n = arr.length;
  const indexMap = {};

  // Create a map of each number's index in the array
  for (let i = 0; i < n; i++) {
    indexMap[arr[i]] = i;
  }

  let currentValue = n;
  let swaps = 0;
  let currentIndex = 0;

  while (swaps < k && currentValue > 0) {
    // Find the index of the current largest value
    const maxIndex = indexMap[currentValue];

    if (currentIndex !== maxIndex) {
      // Swap the current value with the largest value
      arr[maxIndex] = arr[currentIndex];
      arr[currentIndex] = currentValue;

      // Update the indexMap with the new indices
      indexMap[currentValue] = currentIndex;
      indexMap[arr[maxIndex]] = maxIndex;

      swaps++;
    }

    currentValue--;
    currentIndex++;
  }

  return arr;
}


// Anagram

function getCharFrequency(str) {
  const frequency = {};
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
}
function anagram(s) {
  // If the length of the input string is not even, it's impossible to split it into equal substrings.
  if (s.length % 2 !== 0) {
    return -1;
  }

  const halfLength = s.length / 2;
  const firstHalf = s.slice(0, halfLength);
  const secondHalf = s.slice(halfLength);

  // Count the frequency of characters in both halves
  const frequency1 = getCharFrequency(firstHalf);
  const frequency2 = getCharFrequency(secondHalf);

  // Initialize a variable to count the number of character differences
  let diffCount = 0;

  // Compare the character frequencies of the two halves
  for (const char in frequency1) {
    if (!frequency2[char]) {
      // If the character is not present in the second half, all occurrences need to be changed.
      diffCount += frequency1[char];
    } else if (frequency1[char] > frequency2[char]) {
      // If there are more occurrences in the first half, subtract the second half's count.
      diffCount += frequency1[char] - frequency2[char];
    }
  }

  return diffCount;
}


// Cut the sticks 


function cutTheSticks(arr) {
  const results = [];

  while (arr.length > 0) {
    results.push(arr.length); // Record the number of remaining sticks

    // Find the minimum length among the remaining sticks
    const min = Math.min(...arr);

    // Cut all sticks by the length of the shortest stick
    arr = arr.map((stick) => stick - min).filter((stick) => stick > 0);
  }

  return results;
}


// Modified Kaprekar Numbers


function isModifiedKaprekar(n) {
  const squared = BigInt(n) * BigInt(n); // Use BigInt to handle large numbers
  const squaredStr = squared.toString();

  const length = squaredStr.length;
  const mid = Math.floor(length / 2);

  const leftPartStr = squaredStr.substring(0, mid) || '0';
  const rightPartStr = squaredStr.substring(mid) || '0';

  const leftPart = BigInt(leftPartStr);
  const rightPart = BigInt(rightPartStr);

  return leftPart + rightPart === BigInt(n);
}

function kaprekarNumbers(p, q) {
  const kaprekarNumbers = [];

  for (let num = p; num <= q; num++) {
    if (isModifiedKaprekar(num)) {
      kaprekarNumbers.push(num);
    }
  }

  if (kaprekarNumbers.length > 0) {
    console.log(kaprekarNumbers.join(' '));
  } else {
    console.log('INVALID RANGE');
  }
}


// Sherlock and The Beast


var printDecentNumber = function(arr) {
  console.log(arr.join(''));
}

var assembleDecentNumber = function(fives, threes) {
  var arr = [];
  for(i = 0; i < fives; i++) {
    arr.push(5);
  }
  for(i = 0; i < threes; i++) {
    arr.push(3);
  }
  return arr;
}

var calcDecentNumber = function(n) {
  var fives = n;
  var threes = 0;

  while(threes <= n) {
    if(fives % 3 === 0 && threes % 5 === 0) {
      return assembleDecentNumber(fives, threes);
    }
    threes += 5;
    fives -= 5;
  }
  return [-1];
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        printDecentNumber(calcDecentNumber(n));
    }

}


// Game of Thrones - I


function gameOfThrones(s) {
  const charCount = {};

  // Count the frequency of each character in the string
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  // Check if the characters can be rearranged to form a palindrome
  for (const count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  // If there is at most one character with an odd count, it's possible to form a palindrome
  if (oddCount <= 1) {
    return "YES";
  } else {
    return "NO";
  }
}

// Maximizing XOR


function maximizingXor(l, r) {
  let maxXor = 0;
  
  // Calculate the XOR of L and R
  let xor = l ^ r;
  
  // Find the leftmost set bit position in XOR
  let bitPos = 0;
  while (xor) {
    xor >>= 1;
    bitPos++;
  }

  // Calculate the maximum XOR by setting each bit from left to right
  for (let i = 0; i < bitPos; i++) {
    maxXor <<= 1;
    maxXor |= 1;
  }

  return maxXor;
}


// Happy Ladybugs

function happyLadybugs(b) {
  // Write your code here
  let result = {};
  let isUnderscore = false;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === '_') {
      isUnderscore = true;
      continue;
    }

    if (!result[b[i]]) {
      result[b[i]] = 0;
    }

    result[b[i]]++;
  }

  if (!isUnderscore) {
    for (let i = 1; i < b.length - 1; i++) {
      if (b[i - 1] !== b[i] && b[i] !== b[i + 1]) {
        return 'NO';
      }
    }
  }

  for (const [key, value] of Object.entries(result)) {
    if (value === 1) return 'NO';
  }

  return 'YES';
}


// Counting Sort 1

function countingSort(arr) {
  let freqArr = new Array(100).fill(0);

  for (let i of arr) {
    freqArr[i] += 1;
  }

  return freqArr;
}


// Priyanka and Toys 


function toys(w) {
    // Write your code here
  w.sort((a, b) => a - b);

  let units = 0;
  let i = 0;

  while (i < w.length) {
    const currentWeight = w[i];
    units++; // Buy the first toy in the current group

    // Find and skip all toys within 4 units of the first toy's weight
    while (i < w.length && w[i] <= currentWeight + 4) {
      i++;
    }
  }

  return units;
}

// Cavity Map 

function cavityMap(grid) {
  const n = grid.length;
  const result = [];

  // Convert the grid to a two-dimensional array of integers
  const intGrid = grid.map((row) => row.split('').map(Number));

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      if (
        i > 0 &&
        i < n - 1 &&
        j > 0 &&
        j < n - 1 &&
        intGrid[i][j] > intGrid[i - 1][j] &&
        intGrid[i][j] > intGrid[i + 1][j] &&
        intGrid[i][j] > intGrid[i][j - 1] &&
        intGrid[i][j] > intGrid[i][j + 1]
      ) {
        // Mark the cavity with 'X'
        row.push('X');
      } else {
        row.push(intGrid[i][j].toString());
      }
    }
    result.push(row.join(''));
  }

  return result;
}






