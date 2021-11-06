import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/HomePage.module.css";
import { Navbar } from "../Navbar/navbar";
import JPIcon from "../../images/jyothiprakash.jpeg";
import Image from "next/image";
export const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.headerCumNavbar}>
      <div className={styles.HeaderWrapper}>
        {router.pathname === "/contact" ? (
          <>
            <h1 className={styles.htmlTag}>{`<`}</h1>
            <h1 className={styles.nameofUser}>Jyothi Prakash</h1>
            <h1 className={styles.htmlTag}>{`/>`}</h1>
          </>
        ) : (
          <>
            <Image src={JPIcon} alt='Jyothi Prakash' />
            <h1 className={styles.nameofUser}>Jyothi Prakash</h1>
          </>
        )}
      </div>
      <Navbar />
    </div>
  );
};
