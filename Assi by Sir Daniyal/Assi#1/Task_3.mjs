//Assignment 3: Create Quiz App
import promptSync from 'prompt-sync';
const prompt=promptSync();

console.log("__________Quiz App___________")
console.log("______________________________")
console.log(" Choose the best option\n");
console.log("\n\n1. If the length of wire increases then the resistance : ")
console.log("A) Increases")
console.log("B) Decreses")
console.log("C) Remains the same")
let first_opt = prompt('\n')
let marks=0;
switch (first_opt)
{
    case 'A':
        marks++
        break;
    case 'a':
        marks++;
        break;
}

console.log("\n\n2. How to prevent Eddy Current in a transformer? ")
console.log("A) By removing the core")
console.log("B) By laminating the core")
console.log("C) There is no way to prevent Eddy Currents")
let second_opt = prompt('\n')
if (second_opt=='B'||second_opt=='b')
marks++;

console.log("\n\n3. How to increase the capacitance of capacitor? ")
console.log("A) By increasing the area of plates")
console.log("B) By decresing the area of plates")
console.log("C) By doing nothing")
let third_opt = prompt('\n')
if (third_opt=='A'||third_opt=='a')
marks++;

console.log("\n\n4. Diode goes to forward region when ")
console.log("A) The voltage at anode is greater then cathode")
console.log("B) There is positive voltage at anode")
console.log("C) None of the above")
let forth_opt = prompt('\n')
if (forth_opt=='A'||forth_opt=='a')
marks++;

console.log("\n\n5. Who am I? ")
console.log("A) Zohaib")
console.log("B) Shoaib")
console.log("C) Suhaib")
let fifth_opt = prompt('\n')
if (fifth_opt=='C'||fifth_opt=='c')
marks++;

if (marks==5)
{
    console.log("You passed the test")
}
else
{
    console.log("You failed")
}


