// //ES5 METHOD 1
// const MessageMixer = {};
// module.exports = {
//   countCharacter: function (inputString, inputCharacter) {
//     let count = 0;
//     let string = inputString.toLowerCase();
//     let character = inputCharacter.toLowerCase();
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === character) {
//         count++;
//       }
//     }
//     return count;
//   },

//   capitalizeFirstCharacterOfWords(string) {
//     let arr = string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       let word = arr[i];
//       arr[i] = word[0].toUpperCase() + word.substring(1);
//     }
//     return arr.join(" ");
//   },

//   reverseWord: function (word) {
//     return word.split("").reverse().join("");
//   },

//   reverseAllWords: function (sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = this.reverseWord(words[i]);
//     }
//     return words.join(" ");
//   },

//   replaceFirstOccurence: function (string, toBeReplaced, replaceWith) {
//     return string.replace(toBeReplaced, replaceWith);
//   },

//   replaceAllOccurrences: function (string, toBeReplaced, replaceWith) {
//     return string.split(toBeReplaced).join(replaceWith);
//   },

//   encode: function (string) {
//     let replacementObject = { a: "@", s: "$", i: "!", o: "0" };
//     for (let key in replacementObject) {
//       string = this.replaceAllOccurrences(string, key, replacementObject[key]);
//     }
//     return string;
//   },

//   palindrome: function (str) {
//     return `${str} ${this.reverseWord(str)}`;
//   },

//   pigLatin: function (sentence, char) {
//     return sentence.split(" ").join(char + " ");
//   },
// };

//----------------------------------------------------------
// //ES6 METHOD 1 - import, export default
// const MessageMixer = {
//   countCharacter: function (inputString, inputCharacter) {
//     let count = 0;
//     let string = inputString.toLowerCase();
//     let character = inputCharacter.toLowerCase();
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === character) {
//         count++;
//       }
//     }
//     return count;
//   },

//   capitalizeFirstCharacterOfWords(string) {
//     let arr = string.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       let word = arr[i];
//       arr[i] = word[0].toUpperCase() + word.substring(1);
//     }
//     return arr.join(" ");
//   },

//   reverseWord: function (word) {
//     return word.split("").reverse().join("");
//   },

//   reverseAllWords: function (sentence) {
//     let words = sentence.split(" ");
//     for (let i = 0; i < words.length; i++) {
//       words[i] = this.reverseWord(words[i]);
//     }
//     return words.join(" ");
//   },

//   replaceFirstOccurence: function (string, toBeReplaced, replaceWith) {
//     return string.replace(toBeReplaced, replaceWith);
//   },

//   replaceAllOccurrences: function (string, toBeReplaced, replaceWith) {
//     return string.split(toBeReplaced).join(replaceWith);
//   },

//   encode: function (string) {
//     let replacementObject = { a: "@", s: "$", i: "!", o: "0" };
//     for (let key in replacementObject) {
//       string = this.replaceAllOccurrences(string, key, replacementObject[key]);
//     }
//     return string;
//   },

//   palindrome: function (str) {
//     return `${str} ${this.reverseWord(str)}`;
//   },

//   pigLatin: function (sentence, char) {
//     return sentence.split(" ").join(char + " ");
//   },
// };
// export default MessageMixer;

//ES6 METHOD 2 - name import, name export
// export function countCharacter(inputString, inputCharacter) {
//   let count = 0;
//   let string = inputString.toLowerCase();
//   let character = inputCharacter.toLowerCase();
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === character) {
//       count++;
//     }
//   }
//   return count;
// }

// export function capitalizeFirstCharacterOfWords(string) {
//   let arr = string.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     arr[i] = word[0].toUpperCase() + word.substring(1);
//   }
//   return arr.join(" ");
// }

// export function reverseWord(word) {
//   return word.split("").reverse().join("");
// }

// export function reverseAllWords(sentence) {
//   let words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = reverseWord(words[i]);
//   }
//   return words.join(" ");
// }

// export function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
//   return string.replace(toBeReplaced, replaceWith);
// }

// export function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
//   return string.split(toBeReplaced).join(replaceWith);
// }

// export function encode(string) {
//   let replacementObject = { a: "@", s: "$", i: "!", o: "0" };
//   for (let key in replacementObject) {
//     string = replaceAllOccurrences(string, key, replacementObject[key]);
//   }
//   return string;
// }

// export function palindrome(str) {
//   return `${str} ${reverseWord(str)}`;
// }

// export function pigLatin(sentence, char) {
//   return sentence.split(" ").join(char + " ");
// }
