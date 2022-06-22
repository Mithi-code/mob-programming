// Sum range

function sumRange(num){
  if (num === 1) return 1;
  return num + sumRange(num-1);
}

sumRange(8)

// factorial range 

function factorial(nmum){
  if (num === 1) return 1;
  return num * factorial(num-1);
}

factorial(6);

// collecting odd values from an array

function collectOddValues(arr){
  let result = [];
  function helper(helperInput){
    if (helperInput.length === 0){
      return;
    }
    if (helperInput[0] % 2 !== 0){
      result.push(helperInput[0])
    }
    helperInput.slice(1)
  }
  helper(arr)
  return result;
}

collectOddValues([2,3,4,56,6,7,8]);

// Pure recursive function

