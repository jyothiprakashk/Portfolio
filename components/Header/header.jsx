import React from "react";
import styles from "../../styles/HomePage.module.css";
import { Navbar } from "../Navbar/navbar";
import JPIcon from "../../images/jyothiprakash.jpeg";
import Image from "next/image";
export const Header = () => {
  return (
    <div className={styles.headerCumNavbar}>
      <div className={styles.HeaderWrapper}>
        <Image src={JPIcon} alt='Jyothi Prakash' />
        <h1 className={styles.nameofUser}>Jyothi Prakash</h1>
      </div>
      <Navbar />
    </div>
  );
};
