class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = [];
  }

  attack(target) {
    target.health -= this.strength;
    return `${this.name} attacked ${target.name}, leaving ${target.name}'s health remaining to be: ${target.health}`;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  removeItem(item) {
    const foundItem = this.inventory.indexOf(item);
    if (foundItem > -1) {
      this.inventory.splice(foundItem, 1);
    }
  }

  displayCharacter() {
    return `Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Inventory: ${this.inventory}`;
  }
}

const Ranger = new Character("Ranger", 100, 100);
Ranger.addItem("sword");
Ranger.addItem(" arrows");
console.log(Ranger);

console.log(Ranger.displayCharacter());

//-------------------------------------------------------------------
class Player extends Character {
  constructor(name, health, strength, level) {
    super(name, health, strength);
    this.level = level;
  }

  upgrade() {
    this.level++;
    this.health + 10;
    this.strength + 5;
  }
}

const John = new Player("John", 100, 100, 1);
John.addItem("knife");
console.log(John);
//-------------------------------------------------------------------
class Enemy extends Character {
  constructor(name, health, strength, type) {
    super(name, health, strength);
    this.type = type;
  }

  displayCharacter() {
    const characterInfo = super.displayCharacter();
    return `${characterInfo}, Type: ${this.type}`;
  }

  /*
  displayCharacter() {
  super.displayCharacter() + console.log(`The Type is: ${this.type}`);
  }*/
}

const enemy = new Enemy("enemy 1", 100, 100, "monster");
enemy.addItem("poison");
console.log(enemy);
//-------------------------------------------------------------------
class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  use(target) {
    console.log(`Using ${this.name} on ${target.name}`);
  }
}

const Teleportation = new Item(
  "Teleportation Scroll",
  "Teleports the character to a specific location or back to a safe haven"
);
const William = new Player("William", 100, 100);
Teleportation.use(William);
//-------------------------------------------------------------------
class HealthPotion extends Item {
  use(target) {
    target.health += 30;
    console.log(`Using ${this.name} on ${target.name}`);
  }
}

class StrengthElixir extends Item {
  use(target) {
    target.strength += 10;
    console.log(`Using ${this.name} on ${target.name}`);
  }
}
//-------------------------------------------------------------------
class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }

  startGame(playerName) {
    this.player = new Player(playerName, 100, 10, 1);
  }

  endGame() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }

  spawnEnemy(enemyName, enemyHealth, enemyStrength) {
    const enemy = new Enemy(enemyName, enemyHealth, enemyStrength);
    this.enemies.push(enemy);
  }

  spawnItem(itemName, itemDescription) {
    let item;
    if (itemName === "Health Potion") {
      item = new HealthPotion(itemName, itemDescription);
    } else if (item === "Strength Elixir") {
      item = new StrengthElixir(itemName, itemDescription);
    } else {
      const item = new Item(itemName, itemDescription);
    }
    this.items.push(item);
  }

  playerPickUpItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.player.addItem(item);
    }
  }

  playerUseItem(item, target) {
    if (this.player.inventory.includes(item)) {
      item.use(target);
      this.player.removeItem(item);
    }
  }

  playerAttack(enemy) {
    return this.player.attack(enemy);
  }
}
