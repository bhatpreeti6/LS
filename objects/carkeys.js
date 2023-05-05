let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};
let keys = [];
for (objKeys in vehicle) {
  keys.push(objKeys);
}
console.log(keys);