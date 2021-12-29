---
title: "ReactJS Dark mode using local storage (Part-2)"
date: "27/05/2020"
cover_image: "/images/dark-mode.png"
description: "In this post we have enabled dark-mode using LocalStorage and basics of ReactJs.I have explained common reactjs hooks."
time: "3 MIN READ"
---

In previous blog post we discussed local storage, and how local storage is working and how data is stored in local storage and how retrieve data from ls.

In order to follow rest of the article, I would recommend to to read part-1 blog post.

### Discussions: useState(),useEffect()

### useState()

useState is a hook that let you add react state to functional components.since React hooks has been released functional components can use state.

### syntax

```
const [dark, setDark] = useState("");
```

### useEffect()

If you are familiar with class based lifecycles method then you will think about useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

Life cycles method is very important in class based components and sometimes you want to fetch data from API and when render a component.
sometimes you want to do specific action when your component updates.In lifecycle methods most important methods are componentDidMount and componentDidUpdate.useEffect allow us to handle our logic in lifecycles methods.useEffect called every time when your component is changed.

### Lets dive into code

### index.js

```
import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from 'react-dom';



function App() {
  const [dark, setDark] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("dark"));
    return savedmode || false;
  }
  return(
    <div>
    <h1 style={{textAlign:"center"}}>Darkmode with ReactJS</h1>
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));

```

### Output

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3oab0qp4l83pjcex6ugt.png)

This is how local storage is working in live example and **setItem()** is used to set the value in localstorage and **getItem()** is used to retrive the data from localstorage.

### App.css

```
.black {
  background-color: black;
  color: white;
}
.light {
  background-color: blanchedalmond;
  color: black;
}
.nav {
  background-color: blue;
  color: white;
}
.toggle-container {
  background-color: blue;
  padding: 20px;
  display: flex;
  justify-content: center;
}

```

This basic CSS what I did for dark mode.

```
return (
    <div className={dark ? "black" : "light"} style={{ height: "100vh" }}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: dark ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={dark}
              onChange={() => setDark((prevMode) => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: dark ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>

      <div style={{ textAlign: "center" }}>
        <h1>{dark ? "darkmode" : "lightmode"}</h1>
        <p>This is dark mode content</p>
        <h1>The darkmode is implemented by reactjs</h1>
      </div>
    </div>
  );
```

The logic behind dark mode in ReactJS and Iam checking previous mode is not equal to current mode then the display the mode based on logic.

### Final code

```
import React, { useState, useEffect } from "react";
import "./App.css";
import ReactDOM from 'react-dom';



function App() {
  const [dark, setDark] = useState(getMode);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  function getMode() {
    const savedmode = JSON.parse(localStorage.getItem("dark"));
    return savedmode || false;
  }
  return (
    <div className={dark ? "black" : "light"} style={{ height: "100vh" }}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: dark ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={dark}
              onChange={() => setDark((prevMode) => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: dark ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>

      <div style={{ textAlign: "center" }}>
        <h1>{dark ? "darkmode" : "lightmode"}</h1>
        <p>This is dark mode content</p>
        <h1>The darkmode is implemented by reactjs</h1>
      </div>
    </div>
  );
}
ReactDOM.render(<App />,document.getElementById('root'));

```

### Output

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/r3irebtflxph76bi4rc1.png)

### conclusion

I did this blog post for whom don't know about reactjs and localstorage.I thought you will learn little bit from this article.

**Thank you guys!!!..**
