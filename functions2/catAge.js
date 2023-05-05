function catAge(age) {
  switch(age) {
    case(0): return 0;
    case(1): return 15;
    case(2): return 24;
    default:
      let catAge = 24;
      age -= 2;
      while(age) {
        catAge += 4;
        age -=1;
      }
      return catAge;
  }
  
}

console.log(catAge(1)); // 15
console.log(catAge(4)); // 32
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(0)); // 0