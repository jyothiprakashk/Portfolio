import React from "react";
import { SocialMedia } from "../../components/SocialMediaIcons/socialmedia";
import styles from "../../styles/HomePage.module.css";
export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h1>Jyothi Prakash K</h1>
        <p>
          A self motivated and passionate about indivudual work as well as team work 🧑‍💻 on end to end products which
          develop scalable products like Web apps.
        </p>
        <SocialMedia />
      </div>
    </div>
  );
};
