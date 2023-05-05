let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus
while (groceryList) {
  console.log(groceryList.shift());
  if (groceryList.length === 0) {
    break;
  }
}
groceryList; // []