//! 2021/03/12 - Hello Practice
//idea: Starting today i will study & work on project at same time so i don't get bored.

// //topic functions with default output
// function hello(a) {
//   let x = a || "hello";
//   console.log(x);
// }
// hello();

// //topic anonymous functions
// const fun = () => {
//   console.log("Anonymous function");
// };
// fun();

//topic array (secret message)
// prettier-ignore
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.pop());
console.log(secretMessage.length);
console.log(secretMessage.push("to", "Program"));
secretMessage[secretMessage.indexOf("easily")] = "right";
console.log(secretMessage);
