//Assignment 4: Node.js(take input from user using prompt function)

import promptSync from 'prompt-sync';
const prompt=promptSync();


console.clear();
let name = prompt("\nEnter your name: ")
console.log("Your name is "+name);