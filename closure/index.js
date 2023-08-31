// levelUp method = This should increment the character's level by one and print a message indicating the character's new level.

// addXp method = This should add the passed XP (number) to the character's current XP and print a message indicating the XP added.

function createPlayerCharacter(name, level) {
  let xp = 0;

  const levelUp = () => {
    level += 1;
    console.log(`The character is now level: ${level}`);
  };

  const addXp = (xpPassed) => {
    xp += xpPassed;
    console.log(`The xp added is: ${xpPassed}`);
  };

  return {
    name: name,
    getLevel: () => level,
    getXp: () => xp,
    levelUp: levelUp,
    addXp: addXp,
  };
}

let playerCharacter = createPlayerCharacter("Hero", 1);

playerCharacter.levelUp();
playerCharacter.addXp(100);
console.log(playerCharacter);
console.log(playerCharacter.getLevel());
console.log(playerCharacter.getXp());
//--------------------------------------------------------------------
function createInventory() {
  let inventory = [];
  return {
    addItem: function (item) {
      inventory.push(item);
      console.log(`the item ${item} was added to player's inventory`);
    },
    removeItem: function (item) {
      const index = inventory.indexOf(item);
      if (index !== -1) {
        inventory.splice(index, 1);
        console.log(`item ${item} was added`);
      } else {
        console.log(`item ${item} does not exist`);
      }
    },
    getItems: function () {
      return inventory;
    },
  };
}

let inventory = createInventory();
inventory.addItem("Sword");
inventory.addItem("Shield");
console.log(inventory.getItems());
inventory.removeItem("Sword");
