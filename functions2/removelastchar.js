function removeLastChar(string) {
  let arr = string.split('');
  arr.pop();
  return arr.join('');

}

console.log(removeLastChar('ciao!'));
