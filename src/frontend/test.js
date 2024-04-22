const odd = [1, 3, 5];
const even = [2, 4, 6];

const combined = [...odd, ...even];
console.log(combined); // [1, 3, 5, 2, 4, 6]

// Copying an array
const copiedArray = [...odd];
console.log(copiedArray); // [1, 3, 5]


// Object destructuring
const person = {
    name: "Alice",
    age: 25,
    gender: "Female"
};

const { name, age } = person;
console.log(name); // Alice
console.log(age);  // 25

// Array destructuring
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor);  // Red
console.log(secondColor); // Green

