function sockMerchant(n, ar) {
//Write code here
let pair=0
// sort the array elements
ar.sort()
// iterate through the array and compare the elements
for(let i=0;i<n;i++){
  if(ar[i]==ar[i+1]){
// increment i iteration and add a pair
    i++
    pair++
  }
}
return pair
}

// number of elements in the array
let n=9
// elements in the array
let pairs=[10, 20, 20, 10, 10, 30, 50, 10, 20]