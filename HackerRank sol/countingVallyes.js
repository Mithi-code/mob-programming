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