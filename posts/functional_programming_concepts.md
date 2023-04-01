---
title: "Functional Programming Concepts"
publish_date: 2021-04-14
---

Functional programming is a programming paradigm that based on mathematical functions which does computation by avoiding mutation and shared state. Functions are considered as first class citizens in functional programming. There are languages which support both object oriented and functional prgramming like JavaScript, and Python. Languages like Haskell, and Elm are designed only for functional programming. For a beginner starting with a language which is familiar like JavaScript can be helpful to understand the underlying concepts.

Examples will be based on JavaScript,

## Immutability

Mutation of values is done in procedural and object oriented paradigms. However in functional programming mutation is avoided. As a result, debugging is easier, creates less bugs and makes testing enjoyable.

```js
const langs = Object.freeze['JS', 'Python']);
const newLangs = langs.concat('Go', 'Elm')
```

This concept is applicable to every data structure. For example, in JavaScript objects, arrays, sets, maps.

Here's a [list](https://github.com/rajikaimal/immutable-js) of immutable functions in JavaScript

## Pure functions

Functions must always be pure, which means they should return the same result everytime for the same set of arguments and there should not be any side effects.

Let's define side effects. Side effects can be I/O operation, mutating variables or objects.

Simplest example of a pure function,

```js
function sum(a, b) {
  return a + b;
}
```

Following function is impure, as it has logging (remember I/O makes functions impure),

```js
function res(sec) {
  console.log(sec);
  return sec * 60;
}
```

Thus making every function pure is not possible as it is necessary to perform I/O in real world applications. Making functions pure as much as possible should be the goal for easier debugging, less bugs and easier testing.

## Function composition

Functions using the result of one or more multiple functions to produce a result.

```js
function avg(amount, num) {
  return amount / num;
}

function sum(amount) {
  return amount + 2;
}

function multiply(amount) {
  return amount * amount;
}

const value = multiply(sum(avg(200, 10)));
console.log(value);
```

## Higher order functions

HOF is based on function composition that either takes one or more functions as arguments, returns a function as the result or both.

```js
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const value = multiply(2)(4);
console.log(value);
```

```js
const isGreaterThanTwo = (x) => x > 2;
const nums = [1, 3, 4];

const greaterThanTwo = nums.filter(isGreaterThanTwo);
console.log(greaterThanTwo);
```

Modern UI libraries like React heavily makes use of functional programming concepts.
