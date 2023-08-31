// ------------------------------
// SECTION 1: Abstraction
// ------------------------------

/**
 * Base class representing a character in the RPG.
 */
class Character {
  #health = 0;

  constructor(name, health, strength, defense) {
    this.name = name;
    this.#health = health;
    this.strength = strength;
    this.defense = defense;
    this.quests = [];
  }

  // Getter and setter methods for #health private property
  get health() {
    return this.#health;
  }

  set health(value) {
    if (value < 0) {
      this.#health = 0;
    } else {
      this.#health = value;
    }
  }

  // SECTION 2: Encapsulation
  /**
   * Attack another character.
   * @param {Character} target
   */
  attack(target) {
    if (target instanceof Character && target !== this) {
      let damage = this.strength - target.defense;
      damage = damage < 0 ? 0 : damage; // Ensure no negative damage.
      target.receiveDamage(damage);
    }
  }

  /**
   * Update health after receiving damage.
   * @param {number} damage
   */
  receiveDamage(damage) {
    this.#health -= damage;
    if (this.#health < 0) this.#health = 0; // Ensure no negative health.
  }

  /**
   * Display the character's statistics.
   */
  displayStats() {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.#health}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Defense: ${this.defense}`);
  }

  /**
   * Returns a general statement about the character's type.
   */
  characterType() {
    return "This is a basic character.";
  }

  /**
   * Accept a new quest.
   * @param {Quest} quest
   */
  acceptQuest(quest) {
    if (quest instanceof Quest) {
      this.quests.push(quest);
    }
  }
}

// ------------------------------
// SECTION 3: Inheritance
// ------------------------------

class Knight extends Character {
  constructor(name, health, strength, defense, armor) {
    super(name, health, strength, defense);
    this.armor = armor;
  }

  /**
   * Launch a specialized attack considering the armor.
   * @param {Character} target
   */
  shieldAttack(target) {
    if (target instanceof Character && target !== this) {
      let damage = (this.strength + this.armor) - target.defense;
      damage = damage < 0 ? 0 : damage;
      target.receiveDamage(damage);
    }
  }

  // SECTION 4: Polymorphism
  displayStats() {
    super.displayStats();
    console.log(`Armor: ${this.armor}`);
  }

  characterType() {
    return "This is a knight.";
  }
}

class Mage extends Character {
  constructor(name, health, strength, defense, mana) {
    super(name, health, strength, defense);
    this.mana = mana;
  }

  /**
   * Cast a spell on a target.
   * @param {Character} target
   */
  castSpell(target) {
    if (target instanceof Character && target !== this && this.mana > 10) {
      let damage = this.strength + 10;
      this.mana -= 10;
      target.receiveDamage(damage);
    }
  }

  // SECTION 4: Polymorphism
  displayStats() {
    super.displayStats();
    console.log(`Mana: ${this.mana}`);
  }

  characterType() {
    return "This is a mage.";
  }
}

// ------------------------------
// Additional Challenges
// ------------------------------

// SECTION 5: Associations & Composition
class Quest {
  constructor(name, description, reward, requiredEnemies) {
    this.name = name;
    this.description = description;
    this.reward = reward;
    this.requiredEnemies = requiredEnemies;
    this.completed = false;
  }

  /**
   * Mark the quest as completed.
   */
  completeQuest() {
    this.completed = true;
  }
}

// SECTION 6: Advanced Polymorphism
class Forest {
  manaRegeneration(character) {
    if (character instanceof Mage) {
      character.mana += 5; // Example effect: Mage regenerates more mana in the forest.
    }
  }
}

class Desert {
  manaDepletion(character) {
    if (character instanceof Mage) {
      character.mana -= 5; // Example effect: Mage loses mana in the desert.
    }
  }
}

// BONUS
class BattleArena {
  /**
   * Two characters duel each other.
   * @param {Character} char1
   * @param {Character} char2
   */
  duel(char1, char2) {
    while (char1.health > 0 && char2.health > 0) {
      char1.attack(char2);
      if (char2.health > 0) char2.attack(char1);
    }

    if (char1.health > 0) {
      console.log(`${char1.name} wins!`);
    } else {
      console.log(`${char2.name} wins!`);
    }
  }
}

class Inventory {
  constructor() {
    this.items = [];
  }

  /**
   * Add an item to the inventory.
   * @param {string} item
   */
  addItem(item) {
    this.items.push(item);
  }

  /**
   * Remove an item from the inventory.
   * @param {string} item
   */
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  /**
   * Display the items in the inventory.
   */
  displayItems() {
    console.log('Inventory:', this.items.join(', '));
  }
}

// Assuming all of the provided code is above this line...

// ------------------------------
// TESTS
// ------------------------------

// SECTION 1: Testing the basic character
console.log("== Testing Character ==");
const basicChar = new Character("John", 100, 50, 20);
basicChar.displayStats();
console.log(basicChar.characterType());  // This is a basic character.
console.log("-----------------------------");

// SECTION 2: Testing encapsulation
console.log("== Testing Encapsulation: Attack & Damage ==");
const targetChar = new Character("Doe", 80, 40, 30);
basicChar.attack(targetChar);
console.log(targetChar.health);  // Expect decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Knight
console.log("== Testing Knight ==");
const knight = new Knight("Arthur", 120, 60, 25, 15);
knight.displayStats();
console.log(knight.characterType());  // This is a knight.
knight.shieldAttack(targetChar);
console.log(targetChar.health);  // Expect further decreased health value.
console.log("-----------------------------");

// SECTION 3: Testing inheritance with Mage
console.log("== Testing Mage ==");
const mage = new Mage("Merlin", 90, 55, 15, 100);
mage.displayStats();
console.log(mage.characterType());  // This is a mage.
mage.castSpell(targetChar);
console.log(targetChar.health);  // Expect even more decreased health value.
console.log("-----------------------------");

// SECTION 5: Associations & Composition
console.log("== Testing Quests ==");
const quest1 = new Quest("Slay the dragon", "Defeat the mighty dragon and claim its treasure", "Gold", 1);
console.log(quest1.description);  // Defeat the mighty dragon and claim its treasure
basicChar.acceptQuest(quest1);
console.log(basicChar.quests);  // Expect to see the accepted quest
console.log("-----------------------------");

// SECTION 6: Advanced Polymorphism
console.log("== Testing Environments ==");
const forest = new Forest();
const desert = new Desert();
forest.manaRegeneration(mage);
console.log(mage.mana);  // Expect increased mana value for mage
desert.manaDepletion(mage);
console.log(mage.mana);  // Expect decreased mana value for mage
console.log("-----------------------------");

// BONUS
console.log("== Testing BattleArena ==");
const arena = new BattleArena();
arena.duel(basicChar, knight);  // Just an example. Either character could win.
console.log("-----------------------------");

console.log("== Testing Inventory ==");
const inventory = new Inventory();
inventory.addItem("Potion");
inventory.addItem("Sword");
inventory.displayItems();  // Expect Potion, Sword
inventory.removeItem("Potion");
inventory.displayItems();  // Expect Sword
console.log("-----------------------------");
