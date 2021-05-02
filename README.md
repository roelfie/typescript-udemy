# typescript-udemy

My notes of the Udemy course 'Typescript: The Complete Developer's Guide'

## Overview

Chapters 1-8 are about the TypeScript language (syntax and features).
Chapters 9-16 bring this into practice with bigger projects, focussing on design patterns.

## References

### APIs

-   [JSONPlaceholder](http://https://jsonplaceholder.typicode.com/)

## Section 1: Getting started

[TypeScript](https://www.typescriptlang.org/) is an open-source language which builds on JavaScript by adding static type definitions using annotations.

You can play with typescript in the [online TypeScript playground](https://www.typescriptlang.org/play).

### Installing TypeScript & ts-node

```
$ sudo npm install -g typescript ts-node
$ tsc --help
```

### Compiling TypeScript

Browsers and NodeJs only know JavaScript. To run Typescript, you must first compile it to JavaScript:

```
$ tsc index.ts
$ node index.js
```

### Running TypeScript

You can combine `tsc` and `node` and execute TypeScript 'directly' in Node:

```
$ ts-node index.ts
```

## Section 2: Type System

An overview of the [most common types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) of values in JavaScript code.

### Primitive Types

JavaScript has [7 primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive):

-   string
-   number
-   boolean

and

-   symbol
-   null
-   void
-   undefined

### Object Types

JavaScript [standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) can be categorized into

-   functions
    -   eval, isFinite, isNaN, parseFloat, parseInt, encodeURI, decodeURI, ..
-   errors
    -   Error, AggregateError, InternalError, SyntaxError, TypeError, URIError, ..
-   numbers and dates
    -   Number, BigInt, Math, Date
-   indexed collections
    -   Array, Int8Array, UInt8Array, Float32Array, ..
-   keyed collections
    -   Map, Set, WeakMap, WeakSet
-   reflection
    -   Reflect, Proxy
-   internationalisation
    -   Intl, Intl.DateTimeFormat, Intl.NumberFormat, Intl.Locale, ..
-   structured data
    -   ArrayBuffer, Atomics, DataView, JSON, ..
-   etc.

In addition you can define custom [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions), objects, .. which are also all of object type.

## Section 3: Type annotations & inference

The following code is equivalent TypeScript code:

```js
let apples: number = 5;
let today: Date = new Date();
let numbers: number[] = [1, 2, 3];
class Car {}
let car: Car = new Car();
```

and

```js
let apples = 5;
let today = new Date();
let numbers = [1, 2, 3];
class Car {}
let car = new Car();
```

In all of the above examples, TypeScript can derive from the variable initialization what the type of its value is (type inference). We will rely on type inference as much as we can.

### Type 'any'

We use type annotations only when

-   variable declaration and initialization are not on the same line
-   types that can't be inferred
-   a function returns any (e.g. `JSON.parse()`) and we need to clarify the value

Examples with `JSON.parse`:

```js
const coordinates: { x: number, y: number } = JSON.parse('{"x": 10, "y": 20}');
```

or

```js
interface Coordinates {
    x: number;
    y: number;
}
const coordinates: Coordinates = JSON.parse('{"x": 10, "y": 20}');
```

## Section 4: Type annotations with functions

Function returning a `number`:

```js
function divide(a: number, b: number): number {
    return a / b;
}
```

Function that does not return anything:

```js
const logger = (message: string): void => {
    console.log(message);
};
```

Function that `never` reaches its end:

```js
const neverReturningFunction = (message: string): never => {
    throw new Error(message);
};
```

### Destructuring function annotations

Consider an object like

```js
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};
```

and a function accepting such an object as argument:

```js
const logWeather_a = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
```

The function argument can be destructured as follows:

```js
const logWeather_b = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};
```

## Section 5, 6: Arrays and Tuples

### Arrays

The inferred type of the following array is `string[]`:

```js
const fruits = ['apple', 'pear', 'peach'];
```

You can add only strings to this array. You will get a compile error if you try to push a number into the array.

You can allow multiple types in an array:

```js
const dates: (Date | string)[] = [new Date(), '2021-05-01'];
```

### Tuples

Unlike an array, a `tuple` describes one single record. Each property of the record can have a different type.

As an object:

```js
{
    color: 'brown',
    carbonated: true,
    sugar: 40
}
```

As a tuple:

```js
const pepsi: [string, boolean, number] = ['brown', true, 40];
```

or

```js
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 35];
```

The difference with multi-typed arrays is that in a tuple, each position has a fixed type.
Tuples come in handy when working with CSV files (later on in this course).

## Section 7: Interfaces

```js
interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

const myCivic = {
    name: 'civic',
    year: 2002,
    isBroken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

// Compile error (broken <--> isBroken)
printVehicle(myCivic);
```

The object `myCivic` can have more properties than the ones defined in the `Vechile` interface.

## Section 8: Classes

We'll mainly discuss the differences sith Java here.

### Default modifier is public

Allowed method & modifiers in TypeScript are `public`, `private` and `protected`. The default modifier in TS is `public` (unlike Java).

### Modifiers in constructors

You can use modifiers for constructor arguments to avoid boiler plate code:

```js
class Vehicle {
    constructor(public color: string) {}
}
```

is equivalent to

```js
class Vehicle {
    color: string;

    constructor(color: string) {
        this.color = color;
    }
}
```

### Inheritance of non-default constructor

```js
class Vehicle {
    constructor(public color: string) {}
}

class Car extends Vehicle {}

const car = new Car('red');
```

In Java you would have to explicitly define the non-default constructor in the sub class.
