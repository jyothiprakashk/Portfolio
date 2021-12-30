import React from "react";
// import Image from "next/image";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import dev from "../../images/dev.png";
import styles from "../../styles/SocialMedia.module.css";
const mediaIcons = [
  { Icon: facebook, Name: "Facebook", url: "https://www.facebook.com/profile.php?id=100008948191289" },
  { Icon: twitter, Name: "Twitter", url: "" },
  { Icon: instagram, Name: "Instagram", url: "https://www.instagram.com/jyothiprakash__k/" },
  { Icon: linkedin, Name: "Linkedin", url: "https://www.linkedin.com/in/jyothiprakashk/" },
  { Icon: dev, Name: "Dev", url: "https://dev.to/jyothiprakashk" },
];
export const SocialMedia = () => {
  return (
    <div className={styles.socialWrapper}>
      {mediaIcons.map((icons, index) => {
        return (
          <div key={index} className={styles.SocialMediaImages}>
            <a href={icons.url} target='_blank' rel='noreferrer'>
              {/* <Image src={icons.Icon} alt={icons.Name} /> */}
            </a>
          </div>
        );
      })}
    </div>
  );
};
