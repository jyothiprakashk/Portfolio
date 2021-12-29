---
title: "ReactJS Dark mode using local storage (Introduction Part1)"
date: "21/05/2020"
cover_image: "/images/localstorage.jpeg"
description: "LocalStorage is a web storage that allows sites and apps to store and access data right in the browser with no expiration date.the data is stored in browser even after the browser window is closed."
time: "3 MIN READ"
---

### Introduction:

Today I am going to discuss dark-mode in ReactJS, recently I started learning ReactJS, I struggled much time for how dark mode is working in local storage. After struggling, I made a post in ReactJS dark mode.

### What is local-storage ?

[local-Storage](https://www.w3schools.com/jsreF/prop_win_localstorage.asp) is a web storage that allows [JS] (https://www.w3schools.com/js/) sites and apps to store and access data right in the browser with no expiration date.the data is stored in browser even after the browser window is closed.

### Hooks

Hooks are functions, they let you use [React](https://reactjs.org/) without classes, we mean that hooks allow us to easily manipulate the state of our functional component without needing to convert them into class components.

### There are three methods to choose from:

1. `setItem()`: Add key and value to localStorage
2. `getItem()`: Retrieve a value by the key from localStorage
3. `removeItem()`: Remove an item by key from localStorage

### setItem()

It takes two parameters: a key and a value. The key can be referenced later to fetch the value attached to it.

`localStorage.setItem('name', 'python');`
Where name is key and Jyothi Prakash is value.note that local storage only store strings
To store arrays or objects you should convert them to strings.To do this we should use JSON.stringify() method before passing to SetItem().

```
const data={
name:"python",
framework:"Django"
}

localstorage.setItem("language",JSON.stringify(data))
```

### <span>getItem()</span>

getItem() method is used to access the data stored in local storage object.

It accepts only **key** and returns a **value** as string

`localstorage.getItem("language")`

This return a string with the value:

`“{“name”:” python”,” framework”:” Django”}”`

To this value you have converted it back to object.
To do this we use JSON.parse() method which is convert JSON string to object.

`const value=JSON.parse(localstorage.getItem("language"))`

### removeItem()

removeitem() is used to remove the key in local storage if it exists.if there is no key, the method will do nothing.

`localstorage.removeItem("language")`

### localstorage Limitations

1. local storage is limited to 5 MB across all browsers.
2. Don't store sensitive information in local storage.
3. local storage can only be read by the client-side

I hope everyone likes this post, This is my first Blog post in DEV and Here is [Part-2](https://dev.to/jyothiprakash/reactjs-dark-mode-using-local-storage-part-2-17a7)
