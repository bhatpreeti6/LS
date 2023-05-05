function repeat(num,string) {
  let newString = '';
  for (num;num > 0 ; num -=1) {
    newString = newString + string;
  }
  return newString;

}
console.log(repeat(8, 'ha')); 