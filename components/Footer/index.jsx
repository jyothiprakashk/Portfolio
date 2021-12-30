import React from "react";
import styles from "../../styles/SocialMedia.module.css";
import github from "../../images/github.png";
export const Footer = () => {
  return (
    <div className={styles.FooterWrapper}>
      <div>Made with ❤️ By Jyothi Prakash</div>
      <ul>
        <li>Next Js</li>
        <a href='https://github.com/jyothiprakashk' target='_blank' rel='noreferrer'>
          <li className={styles.githubLogo}>
            Github
            <img src={github.src} alt='Github' />
          </li>
        </a>
        <a href='https://en.wikipedia.org/wiki/India' target='_blank' rel='noreferrer'>
          <li style={{ fontSize: "17px" }}>🇮🇳</li>
        </a>
      </ul>
    </div>
  );
};
