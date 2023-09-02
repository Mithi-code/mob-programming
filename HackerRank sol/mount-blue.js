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

