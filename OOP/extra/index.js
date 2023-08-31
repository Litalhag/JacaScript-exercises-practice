// ------------------------------
// SECTION 1: Abstraction
// ------------------------------

class Character {
  #health;
  constructor(name, health, strength, defense) {
    this.name = name;
    this.#health = health; // the # set the property to a private property
    this.strength = strength;
    this.defense = defense;
  }

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

  // The attack method is meant to simulate one character attacking another. It will take another character as a target, and the attack will reduce the target's health based on the attacking character's strength and the target's defense.

  attack(target) {
    // Validation: Check if the target is an instance of the Character class
    if (!(target instanceof Character)) {
      return "Invalid target! Target must be an instance of Character.";
    }

    // Validation: Check if the target is the same as the character initiating the attack
    if (target === this) {
      return "A character cannot attack itself!";
    }
    // Calculate the damage that has been done, based on the attacker's strength and target's defense.
    let damage = this.strength - target.defense; // this.strength = character's strength.
    //The difference between the attacking character's strength (this.strength) and the target's defense (target.defense)
    // If the target's defense is higher than the attacker's strength, the damage could become negative

    if (damage < 0) {
      damage = 0;
    }

    target.receiveDamage(damage);

    // Return a message, for example
    return `${this.name} attacked ${target.name} for ${damage} damage. ${target.name} has ${target.health} health left.`;
  }

  receiveDamage(damage) {
    this.#health = this.health - damage;
    if (this.#health < 0) this.#health = 0; // this ensures that there are no negative values
  }

  displayStats() {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Defense: ${this.defense}`
    );
  }

  characterType() {
    return "This is a basic character";
  }
}

const char = new Character("Alice", 50, 10, 5);
console.log(char.health); // 50
char.health = -10;
console.log(char.health); // 0

// console.log("== Testing Character ==");
// const basicChar = new Character("John", 100, 50, 20);
// basicChar.displayStats();
// console.log(basicChar.characterType());  // This is a basic character.
// console.log("-----------------------------");
