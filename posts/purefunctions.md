---
title: "JavaScript:What is Pure Functions and What is the use?"
date: "19/04/2021"
cover_image: "/images/pure-func.png"
description: "The function always returns the same result if the same arguments passed in.it doesn't depend on any state, variable, data and change in program execution.it must only depends..."
time: "2 MIN READ"
---

When I heard about the Pure Functions in JavaScript, I got shocked. What about the regular functions in JavaScript?. Is there any difference b/w Pure and regular functions?.

### What is Pure Function?

1)The function always returns the same result if the same arguments passed in.it doesn't depend on any state, variable, data and change in program execution.it must only depends on program execution.

```
const data = (a, b) => a + b;
data(2, 4);
```

TO

```
let a = 6;
const sum = (b) => {
  return (a += b);
};
sum(4);
```

### Pure Functions:

If you see above first code block.it is not depending on any variable or state. Based on the input data it will give output without affecting.
if You pass `2` and `4` you will get `6`.

So there is no side effects in pure functions.

###ImPure Functions:

The second example returns nothing. It depends on the variable which is outside the scope.
You will get different results when you called function.the first time result is `10` and next time result is `12`.

### Side Effects:

1. mutating Input Directly.
2. HTTP Calls.
3. logging.
4. Manipulating DOM.

### How to Convert Impure to Pure Functions?

#### Impure Function.

```
const impurefunc = (name, key, mainobject) => {
  mainobject[key] = name;
};
const human = {
  name: "Jyothi Prakash",
};
let data = impurefunc("Mohan", 45, human);
console.log(data, human);

```

The variable human always changed because our function introduced as an assignment variable.

We Can purify the impurefunc as pure function with desire properties.

#### Converting to Pure:

```
const impurefunc = (key, name, mainobject) => {
 const newObject = { ...mainobject };
 newObject[key] = name;
 return newObject;
};
const human = {
 name: "Jyothi Prakash",
};
let data = impurefunc("Mohan", 45, human);
console.log(data, human);
```

Mutating your input can be dangerous, but copy of the original object no problem.

### Summary:

1. You can clone and then mutate your input. Without touching the original one.
2. Spread Syntax `(...object)` is the easiest way for cloning shallowly objects

Thanks for reading this article.
