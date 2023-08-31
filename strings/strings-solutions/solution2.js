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

