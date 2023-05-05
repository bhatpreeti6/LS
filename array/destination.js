function contains(city,destination) {
  for (index = 0 ; index < destination.length ; index+=1) {
    if (city === destination[index]) {
      return true;
      break
    }
  }
  return false;
}
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false