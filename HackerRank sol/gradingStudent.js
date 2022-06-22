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