//parameters: array of enemy objects, callback function
function processEnemies(enemies, callback) {
  if (!Array.isArray(enemies)) {
    throw new Error("Expected an array of enemies");
  }

  for (let enemy of enemies) {
    if (!("name" in enemy) || !("health" in enemy)) {
      throw new Error(
        `Enemy with the ID ${enemy.id} is not in the right structure`
      );
    }
  }
  const newEnemies = JSON.parse(JSON.stringify(enemies));
  newEnemies.forEach(callback);
  return newEnemies;
}

function addHealth(object) {
  object.health += 10;
}

console.log(
  processEnemies(
    (enemies = [
      { id: 1, name: "Enemy 1", health: 80 },
      { id: 2, name: "Enemy 2", health: 120 },
      { id: 3, name: "Enemy 3", health: 65 },
    ]),
    addHealth
  )
);
//------------------------------------------------------------------------------------
//parameters: array of quests objects, callback function
function processQuests(quests, callback) {
  if (!Array.isArray(quests)) {
    throw new Error("Expected an array of enemies");
  }

  for (let quest of quests) {
    if (!("questName" in quest) || !("experience" in quest)) {
      throw new Error(
        `Quest with the ID ${quest.id} is not in the right structure`
      );
    }
  }

  const newQuests = JSON.parse(JSON.stringify(quests));

  addExperience(newQuests);

  return newQuests;
}

function addExperience(newQuests) {
  for (let quest of newQuests) {
    quest.experience += 20;
  }
}

console.log(
  processQuests(
    (quests = [
      { id: 1, questName: "collect mushrooms", experience: 100 },
      { id: 2, questName: "buy items", experience: 90 },
      { id: 3, questName: "collect apples", experience: 80 },
    ]),
    addExperience
  )
);
//------------------------------------------------------------------------------------

// function processQuests(quests, callback) {
//   if (!Array.isArray(quests)) {
//     throw new error("Expected an array of quests");
//   }
//   for (let quest of quests) {
//     if (!quest.name || !quest.experience) {
//       throw new error(
//         `quest with ID ${quest.id} is not in the right structure`
//       );
//     }
//   }
//   const newQuests = JSON.parse(JSON.stringify(quests));
//   newQuests.forEach(callback);
//   return newQuests;
// }
// function newExperience(obj) {
//   obj.experience += 10;
// }
// console.log(
//   processQuests(
//     (quests = [
//       {
//         id: 5,
//         name: "quest name",
//         experience: 100,
//       },
//       {
//         id: 6,
//         name: "quest name 2",
//         experience: 200,
//       },
//     ]),
//     newExperience
//   )
// );
