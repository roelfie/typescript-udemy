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

-   string
-   number
-   boolean

and

-   symbol
-   null
-   void
-   undefined

### Object Types

-   functions
-   arrays
-   objects
-   classes
