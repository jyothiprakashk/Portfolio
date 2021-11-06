// components/ThemeToggle.js

import { useState, useEffect } from "react";
import styles from "../../styles/HomePage.module.css";
const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme || "dark");

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <div className={styles.themeWrapper}>
      {activeTheme === "light" ? (
        <span onClick={() => setActiveTheme("dark")}>🌙</span>
      ) : (
        <span onClick={() => setActiveTheme("light")}>☀️</span>
      )}
    </div>
  );
};

export default ThemeToggle;
