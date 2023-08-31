// Exercise 1: Calculate Total Player Experience
const quests = [
  { name: "Quest 1", experience: 100 },
  { name: "Quest 2", experience: 150 },
  { name: "Quest 3", experience: 75 },
];

const calculateTotalExperience = (questArray) => {
  let totalExperience = 0; //initialize a variable to keep track of the total experience and set it to 0
  for (let i = 0; i < questArray.length; i++) {
    //iterate over each quest object in the input array
    totalExperience += questArray[i].experience; //access each quest object experience property and add its value to the totalExperience
  }
  return totalExperience; // holds the sum of all experience values from the quest object
};

console.log(calculateTotalExperience(quests));
//---------------------------------------------------------------
// Exercise 2: Find Quest by Name
const questName = "Quest 2";

const findQuestByName = (questArray, questName) => {
  //two inputs - an array of quest objects and a quest name
  for (let i = 0; i < questArray.length; i++) {
    //iterate over each quest object in the input array
    if (questArray[i].name === questName) {
      // each quest object in the loop, we check if its name property matches the specified questName:
      return questArray[i];
    }
  }
  return null;
};
// CR - usually, we return 'null' if there is no match, so here you could have write 'return null'.
console.log(findQuestByName(quests, questName)); // CR - if you initialized a variable in line 21, you could use it here...
//---------------------------------------------------------------
// Exercise 3: Sort Quests by Experience
const sortQuestsByExperience = (quests) => {
  // CR - great 💪🏻
  for (let i = 0; i < quests.length; i++) {
    for (let j = 0; j < quests.length - i - 1; j++) {
      if (quests[j].experience > quests[j + 1].experience) {
        // Swap the elements if they are in the wrong order
        const temp = quests[j];
        quests[j] = quests[j + 1];
        quests[j + 1] = temp;
      }
    }
  }
  return quests;
};
sortQuestsByExperience(quests);

console.log(quests);
//-----------------------------------------------------------------
// Exercise 4: Find Enemies with High Health
function enemiesHealth(enemies, healthThreshold) {
  const matchingEnemies = [];
  for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].health > healthThreshold) {
      matchingEnemies.push(enemies[i]);
    }
  }
  return matchingEnemies;
}

const enemies = [
  { name: "Enemy 1", health: 80 },
  { name: "Enemy 2", health: 120 },
  { name: "Enemy 3", health: 65 },
];
const healthThreshold = 100;

console.log(enemiesHealth(enemies, healthThreshold));
//-----------------------------------------------------------------
// Exercise 5: Calculate Matrix Sum
function sumMatrix(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const number = row[j];
      sum += number;
    }
  }

  return sum;
}
/* CR - you got it! Great. Here is another way to solve this, since it uses less code... This approach avoids creating additional variables:
function calculateMatrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
*/
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(sumMatrix(matrix));
//-----------------------------------------------------------------
// Exercise 6: Find Maximum Value in Matrix
function findMaxMatrix(matrixToFindMax) {
  maxValue = 0;
  for (let i = 0; i < matrixToFindMax.length; i++) {
    const row = matrixToFindMax[i];

    for (let j = 0; j < matrixToFindMax.length; j++) {
      const number = row[j];

      if (number > maxValue) {
        maxValue = number;
      }
    }
  }
  return maxValue;
}
/*
CR - again, your solution is right, but here's a better way to solve this:
function findMaximumValueInMatrix(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}
*/

const matrixToFindMax = [
  [10, 5, 8],
  [3, 15, 4],
  [2, 7, 12],
];

console.log(findMaxMatrix(matrixToFindMax));
//-----------------------------------------------------------------
// Exercise 7: Count Even Numbers in Matrix
function evenNumbers(matrixToCountEven) {
  evenCount = 0;
  for (let i = 0; i < matrixToCountEven.length; i++) {
    const row = matrixToCountEven[i];
    for (let j = 0; j < matrixToCountEven.length; j++) {
      const number = row[j];

      if (number % 2 === 0) {
        evenCount++;
      }
    }
  }
  return evenCount;
}

/*
CR- again, your solution is right, but this is the better way to solve this:
function countEvenNumbersInMatrix(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        count++;
      }
    }
  }
  return count;
}
*/

const matrixToCountEven = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(evenNumbers(matrixToCountEven));
//-----------------------------------------------------------------
// Exercise 8: Find Quests with High Rewards
function findHigherRewards(questsToFilter, rewardThreshold) {
  matching = [];
  for (let i = 0; i < questsToFilter.length; i++) {
    if (questsToFilter[i].reward > rewardThreshold) {
      matching.push(questsToFilter[i]);
    }
  }
  return matching;
} // CR - absolutely fabulous 💪🏻

const questsToFilter = [
  { name: "Quest 1", reward: 50 },
  { name: "Quest 2", reward: 100 },
  { name: "Quest 3", reward: 75 },
];
const rewardThreshold = 80;
console.log(findHigherRewards(questsToFilter, rewardThreshold));
//-----------------------------------------------------------------
// Exercise 9: Calculate Total Enemy Power
function totalPower(enemyObjects) {
  let totalPower = 0;

  for (let i = 0; i < enemyObjects.length; i++) {
    totalPower += enemyObjects[i].power;
  }

  return totalPower;
} // CR - superb 💪🏻

const enemyObjects = [
  { name: "Enemy 1", power: 50 },
  { name: "Enemy 2", power: 80 },
  { name: "Enemy 3", power: 65 },
];

console.log(totalPower(enemyObjects));
//-----------------------------------------------------------------
// Extra ex 1:
function movePlayer(gamerGrid, playerPosition, direction) {
  if (direction === "north" && playerPosition.y - 1 >= 0) {
    playerPosition.y -= 1;
  } else if (direction === "south" && playerPosition.y + 1 < gameGrid.length) {
    playerPosition += 1;
  } else if (direction === "east" && playerPosition.x + 1 < gameGrid.length) {
    playerPosition.x += 1;
  } else if (direction === "west" && playerPosition.x - 1 >= 0) {
    playerPosition.x -= 1;
  } else {
    console.log("out of boundaries");
  }
  return playerPosition;
}

const gameGrid = [
  [0, 2, 0],
  [1, 3, 0],
  [0, 2, 0],
];

console.log(movePlayer(gameGrid, { x: 1, y: 1 }, "north"));
//-----------------------------------------------------------------
// Extra ex 2:
// input: playerHP: 100, playerAttack: 20, enemyHP: 50, enemyAttack: 15
function battle(playerHP, playerAttack, enemyHP, enemyAttack) {
  while (playerHP > 0 && enemyHP > 0) {
    enemyHP -= playerAttack; // player attacks first
    if (enemyHP <= 0) {
      //Checking if enemyHP <= 0 after playerAttack
      return "player wins";
    }
    playerHP -= enemyAttack; // Enemy attacks
    if (playerHP <= 0) {
      // checking if playerHP <= 0 after enemy attacks
      return "enemy wins";
    }
  }
}
console.log(battle(100, 20, 50, 15));
//-----------------------------------------------------------------
// Extra ex 3: // output: [{x: 0, y: 1}, {x: 2, y: 1}]
// 0 = an empty space, 1 = the player, and 2 = an enemy
function findEnemies(gameWorld) {
  const enemies = [];
  for (let row = 0; row < gameWorld.length; row++) {
    for (let column = 0; column < gameWorld[row].length; column++) {
      if (gameWorld[row][column] === 2) {
        const enemyLocation = { x: row, y: column };
        enemies.push(enemyLocation);
      }
    }
  }
  return enemies;
}

const gameWorld = [
  [0, 2, 0],
  [1, 0, 0],
  [0, 2, 0],
];

console.log(findEnemies(gameWorld));
//-----------------------------------------------------------------
// Extra ex 4:
// Output: ['west', 'south']
function pathToGo(playerPosition, goalPosition) {
  const arrayPath = [];
  while (
    playerPosition.x !== goalPosition.x ||
    playerPosition.y != goalPosition.y
  ) {
    // calculate distances both x & y
    const xRow = goalPosition.x - playerPosition.x;
    const yColumn = goalPosition.y - playerPosition.y;

    // y column - north, south
    if (yColumn < 0) {
      playerPosition.y = playerPosition.y - 1;
      arrayPath.push("north");
    } else if (yColumn > 0) {
      playerPosition.y = playerPosition.y + 1;
      arrayPath.push("south");
    }

    // x row - east, west
    if (xRow > 0) {
      playerPosition.x = playerPosition.x + 1;
      arrayPath.push("east");
    } else if (xRow < 0) {
      playerPosition.x = playerPosition.x - 1;
      arrayPath.push("west");
    }
  }
  return arrayPath;
}

const playerPosition = { x: 1, y: 1 };
const goalPosition = { x: 0, y: 2 };

const pathToGoal = pathToGo(playerPosition, goalPosition);
console.log(pathToGoal);
