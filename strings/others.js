// function toTitleCase(name) {}

// convert the first letter of a string:
// const word = "freecodecamp";

// const firstLetter1 = word.charAt(0);
// console.log(firstLetter1);

// to uppercase the first letter in this specific string
// const firstLetterCap1 = firstLetter1.toUpperCase();

// console.log(firstLetterCap1);

// method to cut out a substring from an entire string. We will use this method to cut out the remaining part of a word (excluding the first letter):
// const word2 = "freecodecamp";

// const remainingLetters1 = word.substring(1);

// console.log(remainingLetters);

// const someWord = "freecodecamp";

// const firstLetterWord = word.charAt(0);

// const firstLetterCapp = firstLetter.toUpperCase();

// const remainingAllLetters1 = word.slice(1);

// const capitalizedWord = firstLetterCap + remainingLetters;

// console.log(capitalizedWord);

// function getCharacterDetails(character) {
//   let arr = [];
//   for (let key in character) {
//     arr.push(`${key}: ${character[key]}`);
//   }
//   let str = arr.join(", ");
//   return str;
// }

// console.log(
//   getCharacterDetails({ name: "Lital Warrior", class: "shalom", level: 10 })
// );
// function trimDescription(description, maxLength) {
//   if (description.length <= maxLength) {
//     // CR - very good!!!
//     return description;
//   }
//   const words = description.split(" ");
//   let trimmedDescription = "";
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if ((trimmedDescription + word).length <= maxLength) {
//       trimmedDescription += word + " ";
//     } else {
//       break;
//     }
//   }
//   return trimmedDescription.trim();
// }
// console.log(
//   trimDescription(
//     "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.",
//     50
//   )
// );
// function trimDescription(description, maxLength) {
//   if (description.length <= maxLength) {
//     return description;
//   } else {
//     const lastSpaceIndex = description.lastIndexOf(" ", maxLength); // to find the last space char
//     const trimmedDescription = description.slice(0, lastSpaceIndex);
//     return trimmedDescription.concat("..");
//   }
// }

// console.log(
//   trimDescription(
//     "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.",
//     50
//   )
// );
//Write a function, splitMonsters(monsters) , that takes a string of monster names separated by commas and converts it into an array of individual monster names.

// const myFavShow = "The Office";
// const myFavShowArray = myFavShow.split(" ");
// console.log(myFavShowArray);
// const mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };
// mappingValues = [];
// for (const key in mapping) {
//   mappingValues.push(mapping[key]);
// }

// console.log(mappingValues);

// const mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };
// const decodingMap = {};
//   for (const key in mapping) {
//     decodingMap[key] = mapping[key];
//   }
// console.log(decodingMap)
const mapping = { 1: "i", 2: "b", 3: "e", 4: "a", 5: "e" };

function decodeSecret(secret) {
  // Step 1: Create a decoding map from the 'mapping' object
  const decodingMap = {};
  for (const key in mapping) {
    decodingMap[key] = mapping[key];
  }

  // Step 2: Iterate through the encoded secret using a loop
  let decodedSecret = "";
  for (const character of secret) {
    // Step 3: Check if the character is a vowel (exists in the decoding map)
    if (decodingMap.hasOwnProperty(character)) {
      // Step 4: If it is a vowel, replace it with the corresponding decoded character
      decodedSecret += decodingMap[character];
    } else {
      // Step 5: If it is not a vowel, leave it unchanged
      decodedSecret += character;
    }
  }

  // Step 6: Build the decoded secret and return it as the output
  return decodedSecret;
}

// Test the function with the provided example encoded secret directly in console.log
console.log(decodeSecret("Th3 s3cr3t l1r3 1s und3r th3 br1dg3"));
