// 1
// 'iron warrior'
// 'Iron Warrior'

// 'john smith'
function toTitleCase(name) {
  return name.split(' ') // ['john', 'smith']
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))// ['John', 'Smith']
    .join(' ');  // 'John Smith'
}

console.log(toTitleCase('john smith'));

// ["Iron Sword", "Healing Potion", "Steel Shield"], "IRon"

function searchInventory(inventory, query) {
  return inventory.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}

console.log(searchInventory(['Sword', 'Shield', 'Potion'], 'sh'));

// "Goblin, Grunty"
function formatNpcName(name) {
  const [lastName, firstName] = name.split(', ');
  return `${firstName} ${lastName}`;
}

console.log(formatNpcName("Goblin, Grunty"));

function parseDuration(duration) {
  const [hours, minutes] = duration.split(' '); // "3h 45min"
  return {
    hours: parseInt(hours),
    minutes: parseInt(minutes),
  };
}

console.log(parseDuration("3h 45min"));

// 5
function getGameAcronym(title) { // "Epic Fantasy Battle"
  return title.split(' ') // ["Epic", "Fantasy", "Battle"]
    .map(word => word[0].toUpperCase())
    .join("");
}

console.log(getGameAcronym('Massive Multiplayer Online'));

