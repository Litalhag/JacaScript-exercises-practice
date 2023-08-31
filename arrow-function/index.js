// Exercise 1:
function getPlayerName(player) {
  return player.name;
}

// arrow function:
const getPlayerName = (player) => player.name;
//--------------------------------------------------------------------------------
// Exercise 2:
function getPlayerHealth(health) {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
}

// arrow function:
const getPlayerHealth = (health) =>
  health > 70 ? "High" : health > 40 ? "Medium" : "Low";
//--------------------------------------------------------------------------------
// Exercise 3:
function getTotalInventoryValue(items) {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}

// arrow function:
const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return `Total inventory value is ${totalValue}`;
};
// arrow function with reduce:
const getTotalInventoryValue = (items) => {
  const totalValue = items.reduce(
    (accumulator, currentItem) => accumulator + currentItem.value,
    0
  );
  return "Total inventory value is " + totalValue;
};
//--------------------------------------------------------------------------------
// Exercise 4:
let sortedItems1 = items.sort(function (a, b) {
  // CR - My eyes!!! Why let? Why?? We hate let!
  return b.value - a.value;
});

// arrow function:
let sortedItems = items.sort((a, b) => b.value - a.value); // CR - don't use let... It hearts my eyes...
//--------------------------------------------------------------------------------
// Exercise 5:
function getItemNames(items) {
  return items.map(function (item) {
    return item.name;
  });
}

// arrow function:
const getItemNames = (items) => items.map((item) => item.name);
