// Character superclass
class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.inventory = [];
  }

  // Method to attack another character
  attack(target) {
    target.health -= this.strength;
    return `${this.name} attacks ${target.name}. ${target.name} has ${target.health} health left.`;
  }

  // Method to add an item to the inventory
  addItem(item) {
    this.inventory.push(item);
  }

  // Method to remove an item from the inventory
  removeItem(item) {
    const index = this.inventory.indexOf(item);
    if (index > -1) {
      this.inventory.splice(index, 1);
    }
  }

  // Method to display the character's details
  displayCharacter() {
    return `Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\nInventory: ${this.inventory.join(', ')}`;
  }
}

// Player subclass
class Player extends Character {
  constructor(name, health, strength, level) {
    super(name, health, strength);
    this.level = level;
  }

  // Method to upgrade the player's level
  upgrade() {
    this.level++;
    this.health += 10;
    this.strength += 5;
  }
}

// Enemy subclass
class Enemy extends Character {
  constructor(name, health, strength, type) {
    super(name, health, strength);
    this.type = type;
  }

  displayCharacter() {
    const info = super.displayCharacter();
    return `${info}\nType: ${this.type}`;
  }
}

// Item class
class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  // Method to use the item on a character (will be overwritten by subclasses)
  use(target) {
    console.log(`Using item ${this.name} on ${target.name}`);
  }
}

class HealthPotion extends Item {
  use(target) {
    target.health += 30;
    console.log(`${this.name} used on ${target.name}. ${target.name}'s health is now ${target.health}.`);
  }
}

class StrengthElixir extends Item {
  use(target) {
    target.strength += 10;
    console.log(`${this.name} used on ${target.name}. ${target.name}'s strength is now ${target.strength}.`);
  }
}

// Game class
class Game {
  constructor() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }

  // Method to start a game
  startGame(playerName) {
    this.player = new Player(playerName, 100, 10, 1);
  }

  // Method to end a game
  endGame() {
    this.player = null;
    this.enemies = [];
    this.items = [];
  }

  // Method to spawn an enemy
  spawnEnemy(enemyName, enemyHealth, enemyStrength) {
    const enemy = new Enemy(enemyName, enemyHealth, enemyStrength);
    this.enemies.push(enemy);
  }

  // Method to spawn an item
  spawnItem(itemName, itemDescription) {
    let item;
    if (itemName === "Health Potion") {
      item = new HealthPotion(itemName, itemDescription);
    } else if (itemName === "Strength Elixir") {
      item = new StrengthElixir(itemName, itemDescription);
    } else {
      item = new Item(itemName, itemDescription);
    }
    this.items.push(item);
  }

  // Method for the player to pick up an item
  playerPickUpItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.player.addItem(item);
    }
  }

  // Method for the player to use an item
  playerUseItem(item, target) {
    if (this.player.inventory.includes(item)) {
      item.use(target);
      this.player.removeItem(item);
    }
  }

  // Method for the player to attack an enemy
  playerAttack(enemy) {
    return this.player.attack(enemy);
  }
}


// Instantiate a new game
const game = new Game();

// Start the game with a player
console.log("Starting game with player 'John'");
game.startGame("John");
console.log(game.player.displayCharacter());

// Spawn an enemy
console.log("Spawning enemy 'Goblin'");
game.spawnEnemy('Goblin', 50, 5, 'Goblin');
console.log(game.enemies[0].displayCharacter());

// Player attacks the enemy
console.log("Player attacks Goblin");
console.log(game.playerAttack(game.enemies[0]));

// Spawn items
console.log("Spawning items 'Health Potion' and 'Strength Elixir'");
game.spawnItem('Health Potion', 'A potion that restores 30 health.');
game.spawnItem('Strength Elixir', 'An elixir that increases strength by 10.');
console.log(`Spawned Items: ${game.items.map(item => item.name).join(', ')}`);

// Player picks up items
console.log("Player picks up Health Potion and Strength Elixir");
game.playerPickUpItem(game.items[0]);
game.playerPickUpItem(game.items[0]);
console.log(game.player.displayCharacter());

// Player uses the health potion
console.log("Player uses Health Potion");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player uses the strength elixir
console.log("Player uses Strength Elixir");
game.playerUseItem(game.player.inventory[0], game.player);
console.log(game.player.displayCharacter());

// Player upgrades level
console.log("Player upgrades level");
game.player.upgrade();
console.log(game.player.displayCharacter());

// End the game
console.log("Ending game");
game.endGame();
