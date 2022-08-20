// Start by creating a variable `message`
let message = "Hii, My name is Manpreet Singh."
console.log(message);

// You can find out how many characters there are in a string by using the length property of a string
let name = "Manpreet Singh";
let myNameLength = name.length;
console.log(`My name has ${myNameLength} characters.`);

// You can also get a modified version of a string by calling string methods. Let's try one:
let nombre = "Singh";
let nameLowerCase = nombre.toLocaleLowerCase();
let nameUpperCase = nombre.toUpperCase();
console.log(nameLowerCase + " " + nameUpperCase);


// Exercise-1 : Log a message that includes the length of your name
   let nom = " Manpreet Singh ";
   let nomLength = nom.length;
   console.log(nomLength);


// Exercise-2 : Log the same message using the variable, name provided
   console.log(nom);              
   //Use the .trim method to remove the extra whitespace
   console.log(nom.trim());
   console.log(`My name is ${nom} and my name is ${nom.length} characters long`);
