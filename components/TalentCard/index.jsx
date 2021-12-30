import React from "react";
import HackerrankIcon from "../../images/hackerrank.png";
import FreecodeCampIcon from "../../images/freecodecamp.jpeg";
// import Image from "next/image";
import styles from "../../styles/Education.module.css";
const Cards = [
  { Image: HackerrankIcon, Id: "1", alt: "hackerrank", Link: "https://www.hackerrank.com/pythondjango9704" },
  { Image: FreecodeCampIcon, Id: "2", alt: "freecodecamp", Link: "https://www.freecodecamp.org/jyothiprakash" },
];
export const TalentCard = () => {
  return (
    <div className={styles.talentImages}>
      {Cards.map((data, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <a href={data.Link} target='_blank' rel='noreferrer'>
              {/* <Image src={data.Image} alt={data.alt} /> */}
            </a>
          </div>
        );
      })}
    </div>
  );
};
