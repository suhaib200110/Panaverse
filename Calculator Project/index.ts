#!/usr/bin/env node
//The above line tells the program to execure in nodejs
//Dev depend dependencies are used at development
//Other are used at deployment so inquirer is used at deployment
//npm i @types/inquirer  This will add intellicence to inquirer and do this similar method for chalk
//if node_modules folder is not present then by typing npm i we can install all the required packages that are mentioned in json file
//From the above the user can install the all the dependencies using npm i
//npm i -D @types/inquirer adds the file in dev dependency

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { type } from "os";
console.clear();
function sleep(x: number) {
  return new Promise((res) => {
    setTimeout(res, x);
  });
}

async function title() {
  let display_name = chalkAnimation.glitch("Created By Muhammad Suhaib Salman!");
  await sleep(2000);
  display_name.stop();
  let display_name_2= chalkAnimation.rainbow(`
    
   _  _      _         _ ____ __  __         __              __         _    __  
  / )/_| /  / )/  //  /_| /  /  )/__)       / _)(__/        (  /  /)__//_| // _) 
 (__(  |(__(__(__/(__(  |(  (__// (        /(_)  /         __)(__//  /(  |(/(_)  
                                                                                 
           
    `);
    await sleep(1000);
    display_name_2.stop();
}

async function pass_strings(x: string) {
  let d = chalkAnimation.rainbow(x);
  await sleep(2000);
  d.stop();
}

async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "What type of operation do you want to peorform? ",
      name: "operator",
      choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
    {
      type: "number",
      message: "Enter the first number: ",
      name: "num1",
    },
    {
      type: "number",
      message: "Enter the second number: ",
      name: "num2",
    },
  ]);
  if (answers.operator == "Addition") {
    await pass_strings(`Answer = ${answers.num1 + answers.num2}`);
  } else if (answers.operator == "Subtraction") {
    await pass_strings(`Answer = ${answers.num1 - answers.num2}`);
  } else if ((answers.operator = "Division")) {
    await pass_strings(`Answer = ${answers.num1 / answers.num2}`);
  } else {
    await pass_strings(`Answer = ${answers.num1 * answers.num2}`);
  }
}

//title();

async function askAgain() {
    await title();
  //await askQuestions();
  do {
    await askQuestions();
    var again = await inquirer.prompt([
      {
        name: "again1",
        message: "Do want run the calculator again? ",
        type: "list",
        choices:['yes','no']
      },
    ]);
  } while (
    (again.again1 === 'yes')
  );
}

askAgain();