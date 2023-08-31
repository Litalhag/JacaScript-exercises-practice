// Exercise 1:
const getPlayerNames = (players) => players.map((player) => player.name);

console.log(
  getPlayerNames([{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }])
);
// [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }]
//  ["Hero", "Warrior", "Mage"]
//-------------------------------------------------------------------
// Exercise 2:
const playerByMinLevel = (players, minLevel) =>
  players.filter((player) => player.level >= minLevel);
console.log(playerByMinLevel([{ level: 1 }, { level: 2 }, { level: 3 }], 2));
// [{ level: 1 }, { level: 2 }, { level: 3 }], minLevel = 2
// [{ level: 2 }, { level: 3 }]
//-------------------------------------------------------------------
// Exercise 3:
const getTotalHealth = (players) =>
  players.reduce((total, player) => total + player.health, 0);
console.log(getTotalHealth([{ health: 100 }, { health: 120 }, { health: 80 }]));
// Input: [{ health: 100 }, { health: 120 }, { health: 80 }]
// Expected Output 300
//-------------------------------------------------------------------
// Exercise 4:
// input: [{ name: "Hero", level: 1 }, { name: "Warrior", level: 2 }]
// output: ["Hero - Level 1", "Warrior - Level 2"]
const getPlayerInfo = (players) =>
  players.map((player) => `${player.name} - Level ${player.level}`);
console.log(
  getPlayerInfo([
    { name: "Hero", level: 1 },
    { name: "Warrior", level: 2 },
  ])
);
//-------------------------------------------------------------------
// Exercise 5:
const updatedHealth1 = (players, newHealth, playerName) => {
  const updatedPlayers = players.map((player) => {
    if (player.name === playerName) {
      // If the player's name matches the provided playerName
      // create a new player object with the updated health value
      return { ...player, health: player.health + newHealth };
    } else {
      // If the player's name doesn't match, keep the player object unchanged
      return player;
    }
  });
  // Return the new array with all updated players
  return updatedPlayers;
};
//console log:
console.log(
  updatedHealth1(
    [
      { name: "Hero", health: 100 },
      { name: "Warrior", health: 120 },
    ],
    (newHealth = 150),
    (playerName = "Hero")
  )
);
// in short:
const updatedHealth = (players, newHealth, playerName) =>
  players.map((player) =>
    player.name === playerName //checks if the name property of the player object is equal to itself.
      ? { ...player, health: newHealth }
      : player
  );
// console log:
console.log(
  updatedHealth(
    [
      { name: "Hero", health: 100 },
      { name: "Warrior", health: 120 },
    ],
    (newHealth = 150),
    (playerName = "Hero")
  )
);
// input:  [{ name: "Hero", health: 100 }, { name: "Warrior", health: 120 }], newHealth = 150, playerName = "Hero"
// output: [{ name: "Hero", health: 150 }, { name: "Warrior", health: 120 }]
//-------------------------------------------------------------------------------------------------
// Exercise 6:
const playersLocation = (players, location) =>
  players.filter((player) => player.location === location);
// input:[{ location: "forest" }, { location: "mountain" }, { location: "castle" }], location = "forest"
// output: [{ location: "forest" }]
console.log(
  playersLocation(
    [{ location: "forest" }, { location: "mountain" }, { location: "castle" }],
    (location = "forest")
  )
);
//-------------------------------------------------------------------------------------------------
// Exercise 7:
const averagePlayers = (playerLevel) =>
  playerLevel.reduce((total, player) => player.level + total, 0) /
  playerLevel.length;
// input: [{ level: 1 }, { level: 2 }, { level: 3 }]
// output: 2
console.log(averagePlayers([{ level: 1 }, { level: 2 }, { level: 3 }]));
//-------------------------------------------------------------------------------------------------
// Exercise 8:
const sortedPlayer = (playerHealth) =>
  playerHealth.sort((player1, player2) => player2.health - player1.health);
// input: [{ health: 100 }, { health: 120 }, { health: 80 }]
// output:  [{ health: 120 }, { health: 100 }, { health: 80 }]
console.log(sortedPlayer([{ health: 100 }, { health: 120 }, { health: 80 }]));
//-------------------------------------------------------------------------------------------------
// Exercise 9:
const playerInventory = (players) => players.map((player) => player.inventory);
// input: [{ inventory: ["sword", "health potion"] }, { inventory: ["axe", "shield"] }]
// output: [["sword", "health potion"], ["axe", "shield"]]
console.log(
  playerInventory([
    { inventory: ["sword", "health potion"] },
    { inventory: ["axe", "shield"] },
  ])
);
