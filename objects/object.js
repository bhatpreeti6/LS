let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let obj = {};
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
for ( let i=0; i < nestedArray.length; i+=1) {
  obj[nestedArray[i][0]] = nestedArray[i][1];
}
console.log(obj)