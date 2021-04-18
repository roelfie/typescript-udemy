let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

// Built-in objects
let today: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// In all of the above examples, we can remove the type annotations (because of type inference)

// When to use annotations?

// (1) Functions with return type 'any':
const json = '{"x"; 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// (2) Variable declaration without initialization:
let words = ['red', 'green', 'blue'];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}

// (3) Types that can not be infered:
let scores = [-10, -1, 12];
let scoreAboveZero: boolean | number = false; //
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 0) {
        scoreAboveZero = scores[i];
    }
}
