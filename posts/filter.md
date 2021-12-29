---
title: "JavaScript Filter"
date: "01/12/2021"
cover_image: "/images/filter.png"
description: "The filter() method returns new array with all the elements that pass the test implemented by provided function."
time: "2 MIN READ"
---

- [Definition](#def)
- [Filter Tips](#tips)
- [Conclusion](#conclusion)

<a id="def"></a>

## Definition

The `filter()` method returns new array with all the elements that pass the test implemented by provided function.

<a id="tips"></a>

## Filter Tips

Check below code for filter.

```javascript
If you have array like this.

const data=[
  {name:"prakash",age:20},
  {name:"bhanu",age:21},
  {name:"mohan",age:40}
];

// Then instead of writing code like this
const select_user=data.filter(function(user){
    if (user.name==="prakash"){
       return true
    }
    return false
});
```

You can simplify code as shown it below:

```javascript
let selected_user = data.filter(function (user) {
  return user.name === "prakash";
});
```

The above code will return true,if the condition is satisfied otherwise it will return false

We can simplify above code much more simple and understandable using `ES6` syntax.

```javascript
let selected_user = data.filter((user) => user.name === "prakash");
```

<a id="conclusion"></a>

## Conclusion

1. Filter method returns a new array consisting only those
   elements that satisfied the provided function.

2. Filter method does not change original array.

3. Filter method does not execute function for empty elements.

I hope You will learn something from this post.If there are more usecases, please mention in below comment section.

Thanks.
