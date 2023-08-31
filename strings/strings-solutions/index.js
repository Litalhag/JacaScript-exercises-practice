// 1. Character Name Capitalization
// This function capitalizes the first letter of each word in a string.
function toTitleCase(name) {
  return name.split(' ') // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words back into a single string
}
// Test 1
console.log(toTitleCase('john smith')); // Expected output: "John Smith"


// 2. Item Search
// This function filters an inventory list to find items that contain a search query.
function searchInventory(inventory, query) {
  return inventory.filter(item => item.toLowerCase().includes(query.toLowerCase())); // Filter the inventory array to only include items that contain the query
}
// Test 2
console.log(searchInventory(['Sword', 'Shield', 'Potion'], 'sh')); // Expected output: ["Shield"]


// 3. NPC Name Format
// This function re-formats a name string from "LastName, FirstName" to "FirstName LastName".
function formatNPCName(name) {
  const [lastName, firstName] = name.split(', '); // Split the name into first and last name
  return `${firstName} ${lastName}`; // Return the reformatted name
}
// Test 3
console.log(formatNPCName('Smith, John')); // Expected output: "John Smith"


// 4. Quest Duration
// This function takes a duration string of the form "Xh Ymin" and returns an object with properties for hours and minutes.
function parseDuration(duration) {
  const [hours, minutes] = duration.split(' '); // Split the duration into hours and minutes
  return {
    hours: parseInt(hours), // Parse the hours string to an integer
    minutes: parseInt(minutes) // Parse the minutes string to an integer
  };
}
// Test 4
console.log(parseDuration("3h 45min")); // Expected output: { hours: 3, minutes: 45 }


// 5. Game Title Acronym
// This function generates an acronym from the first letter of each word in a string.
function getGameAcronym(title) {
  return title.split(' ') // Split the title into an array of words
    .map(word => word.charAt(0).toUpperCase()) // Take the first character of each word
    .join(''); // Join the characters into a single string
}
// Test 5
console.log(getGameAcronym('Massive Multiplayer Online')); // Expected output: "MMO"


// 6. Concatenate Character Details
// This function takes a character object and returns a formatted string with the character's details.
function getCharacterDetails(character) {
  return `${character.name}, class: ${character.class}, level: ${character.level}`; // Format the character details into a string
}
// Test 6
console.log(getCharacterDetails({ name: 'John', class: 'Warrior', level: 2 })); // Expected output: "John, class: Warrior, level: 2"


// 7. Location Slug
// This function converts a location string into a URL-friendly format (a "slug").
function createSlug(location) {
  return location.toLowerCase().split(' ').join('-'); // Convert the location to lowercase, split it into words, and join the words with hyphens
}
// Test 7
console.log(createSlug('Dark Woods')); // Expected output: "dark-woods"


// 8. Quest Description Trimming
// This function trims a description string to a maximum length, ending at the last full word that fits.
function trimDescription(description, maxLength) {
  if (description.length <= maxLength) return description; // If the description is already short enough, return it as is
  return `${description.slice(0, description.lastIndexOf(' ', maxLength))}...`; // Otherwise, trim it to the last full word and add an ellipsis

  // description.lastIndexOf(' ', maxLength) is finding the last occurrence of a space (' ') within the first maxLength characters of the string. This is to ensure that the string is cut off at a space (so that it doesn't cut off in the middle of a word).
}
// Test 8
console.log(trimDescription('This is a very long quest description that needs to be shortened.', 30)); // Expected output: "This is a very long quest..."


// 9. Monster List
// This function splits a string of monster names into an array.
function splitMonsters(monsters) {
  return monsters.split(', '); // Split the string at each comma and space
}
// Test 9
console.log(splitMonsters('Goblin, Ogre, Dragon')); // Expected output: ["Goblin", "Ogre", "Dragon"]


// 10. Secret Code Decoder
// This function replaces numbers in a string with corresponding characters according to a predefined mapping.
function decodeSecret(secret) {
  const mapping = { '1': 'i', '2': 'b', '3': 'e', '4': 'a', '5': 'e' }; // Define the character mapping
  return secret.split('') // Split the secret into an array of characters
    .map(char => mapping[char] || char) // Replace each character with its mapped value, or leave it as is if it has no mapping
    .join(''); // Join the characters back into a single string
}
// Test 10
console.log(decodeSecret('Th3 s3cr3t l41r 1s und3r th3 br1dg3')); 
