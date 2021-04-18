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

```
let apples: number = 5;
let today: Date = new Date();
let numbers: number[] = [1, 2, 3];
class Car {}
let car: Car = new Car();
```

and

```
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

```
const coordinates: {x: number, y: number} = JSON.parse('{"x": 10, "y": 20}');
```

or

```
interface Coordinates {
    x: number;
    y: number;
}
const coordinates: Coordinates = JSON.parse('{"x": 10, "y": 20}');
```
