---
title: "JavaScript:What is Pure Functions and What is the use?"
date: "18/10/2021"
cover_image: "/images/map.jpeg"
description: "Javascript has some handy methods which is usefull to iterate arrays.The most two common methods is Array.prototype.forEach() and Array.prototype.map().we can iterate..."
time: "3 MIN READ"
---

Javascript has some handy methods which is usefull to iterate arrays.The most two common methods is **`Array.prototype.forEach()`** and **`Array.prototype.map()`**.we can iterate arrays with both methods but output is different.This methods is unclear for many developers, espescially for beginners.

- [Definition](#definition)
- [1.Return value](#return)
- [2.The ability to chain other methods](#chain)
- [4.When to use? what?](#use)
- [Final Thoughts](#final)

<a name="definition"></a>

## Definition

The `map()` method creates a **new array** every time with the populated results of calling a provided function on every element in the calling array.

The `forEach()` method executes with the provided function once for each array element.

<a name="return"></a>

## Return value

The major difference between `map()` and `forEach()` is returning value.map returns new array with transformed elements based on the function which you written and even if they do same job, The returning value is `undefined`.

```javascript
let users = ["jyothiprakash", "bhanu", "nikitha"];
const newArray = users.map((d) => {
  return { _id: d };
});
//>>>>[{_id: "jyothiprakash"},{_id: "bhanu"},{_id: "nikitha"}]

const newArray = users.forEach((d) => {
  return { _id: d };
});
//>>>>>>>>>>>>>return value: undefined
```

<a name="chain"></a>

## Ability to chain

The difference between `map()` and `forEach()` is chain with other methods.`map` is chainable but `forEach` isn't.

This means map can chain with other methods like `reduce()`,`sort()` etc.But that is not possible with forEach because it will return undefined.

```javascript
let data = [1, 2, 3, 4, 5];

let res = data.map((d) => d * 2).reduce((total, value) => total + value);
// return value:30

let res = data.forEach((d) => d * 2).reduce((total, value) => total + value);

//Cannot read properties of undefined (reading 'reduce')"
```

<a name="use"></a>

## when to use `map()`? and when to use `forEach()`?

Choice between forEach and map is depends on your usecase.

If you want to change,alternate or use data you can pick `map` because it will return a new array.

If you don't want returning array you can use `forEach` or even `for` loop.

<a name="final"></a>

## Final Thoughts

1.Just about anything you can with `forEach()` and `map()` methods.

2.map allocates memory and always stores `return` value.forEach through away return values and always return `undefined`.

3.forEach will allow a callback function to mutate current array but map won't mutate current array instead return new array.

I hope this post will clear difference between map and forEach methods.If there are more methods please mention in comment section.

If this post is helpful please click on ❤️ Tab.

Thanks.
