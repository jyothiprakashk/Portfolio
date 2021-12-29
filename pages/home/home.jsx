import React from "react";
import { SocialMedia } from "../../components/SocialMediaIcons/socialmedia";
import styles from "../../styles/HomePage.module.css";
import HomeIcon from "../../images/home.svg";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maindata}>
        <div className={styles.textWrapper}>
          <h1>Jyothi Prakash K</h1>
          <p>
            Hi, myself is Jyothi Prakash I'm Front End Developer from India ☀️. A self motivated and passionate about
            indivudual work as well as team work 🧑‍💻 on end to end products which develop scalable products like Web
            apps.
          </p>
        </div>
        <div className={styles.homeImage}>
          <Image src={HomeIcon} alt='home' />
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};
export default HomePage;
