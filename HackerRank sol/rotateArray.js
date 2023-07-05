function rotLeft(a, d) {
    // Write your code here
 let size = a.length;
   let newArr = [];
   let rotateLeftIdx = d;

   let i = 0;
   while(rotateLeftIdx < size){
       newArr[i] = a[rotateLeftIdx];
       i++;
       rotateLeftIdx++;
   }

   rotateLeftIdx = 0;
   while(rotateLeftIdx < d){
       newArr[i] = a[rotateLeftIdx];
       i++;
       rotateLeftIdx++;
   }
   return newArr;
}