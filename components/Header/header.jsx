import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/HomePage.module.css";
import { Navbar } from "../Navbar/navbar";
import jPIcon from "../../images/jyothiprakash.jpeg";
import Link from "next/link";
export const Header = () => {
  const router = useRouter();

  function toggleMobileMenu(menu) {
    let data = document.getElementById("hamburgericon");
    data?.classList?.toggle("open");
  }
  return (
    <>
      <div className={styles.headerCumNavbar}>
        <div className={styles.headerContainer}>
          <div className={styles.HeaderWrapper}>
            {router.pathname === "/contact" ? (
              <Link href={"/"} passHref>
                <h1 className={styles.nameofUser}>Jyothi Prakash</h1>
              </Link>
            ) : (
              <>
                <Link href={"/"} passHref>
                  <div className={styles.HeaderWrapper}>
                    <img src={jPIcon.src} alt='Jyothi Prakash' />
                    <div className={styles.nameofUser}>Jyothi Prakash</div>
                  </div>
                </Link>
              </>
            )}
          </div>
          <Navbar />
        </div>
      </div>
      <div className='header'>
        {router.pathname === "/contact" ? (
          <Link href={"/"} passHref>
            <h1 className={styles.nameofUser}>Jyothi Prakash</h1>
          </Link>
        ) : (
          <>
            <Link href={"/"} passHref>
              <div className={styles.HeaderWrapper}>
                <img src={jPIcon.src} alt='Jyothi Prakash' />
                <div className={styles.nameofUser}>Jyothi Prakash</div>
              </div>
            </Link>
          </>
        )}
        <div id='hamburgericon' onClick={() => toggleMobileMenu(this)}>
          <div className='main'>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
          </div>
          <ul className='mobilemenu'>
            <Navbar />
          </ul>
        </div>
      </div>
    </>
  );
};
