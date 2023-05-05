let str = 'launch school tech & talk';
let arr = str.split(' ');
let newString = [];
console.log(arr);
for (let i = 0; i < arr.length ; i+=1) {
  //let word = arr[i];
  //console.log(word);
  
  
  newString.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  //console.log(arr[i])
  
}

newString.join(' ');
console.log(newString);