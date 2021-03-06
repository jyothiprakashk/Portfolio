import React from "react";
import JP from "../../images/jyothiprakash.jpeg";
import styles from "../../styles/Contact.module.css";
import { SocialMedia } from "../../components/SocialMediaIcons/socialmedia";
const Contact = () => {
  return (
    <div className={styles.ContactWrapper}>
      <div className={styles.ImageStyle}>{<img src={JP.src} alt='Jyothi Prakash' />}</div>
      <div className={styles.textWrapper}>
        <h1>Contact Me</h1>
        <p>
          I am available almost all social media platforms 👀.You can ping me, I will reply within 24 hours.I can help
          you with Frontend Technology like JavaScript,NextJs,ReactJs 👨‍💻.
        </p>
        <SocialMedia />
        <a
          href='https://github.com/jyothiprakashk/Resume/blob/main/jpresume.pdf'
          download='JyothiPrakash'
          target='_blank'
          rel='noreferrer'>
          <button>See My Resume</button>
        </a>
      </div>
    </div>
  );
};
export default Contact;
