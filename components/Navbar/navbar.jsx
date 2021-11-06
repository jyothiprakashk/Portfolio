import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/HomePage.module.css";
// import ThemeToggle from "../ThemeToggle";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../ThemeToggle"), {
  ssr: false,
});

const navJson = [
  { Name: "Home", Route: "/", className: styles.activeClass, activeClassName: styles.activeClassName },
  { Name: "Education", Route: "/education", className: styles.activeClass, activeClassName: styles.activeClassName },
  { Name: "Experience", Route: "/experience", className: styles.activeClass, activeClassName: styles.activeClassName },
  { Name: "Projects", Route: "/projects", className: styles.activeClass, activeClassName: styles.activeClassName },
  { Name: "Contact Me", Route: "/contact", className: styles.activeClass, activeClassName: styles.activeClassName },
];
export const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname, "pathname");
  return (
    <div className={styles.NavbarWrapper}>
      {navJson.map((link, index) => {
        return (
          <nav className={styles.Navbar} key={index}>
            <Link href={link.Route}>
              <div className={router.pathname === link.Route ? styles.activeClass : styles.normalClass}>
                {link.Name}
              </div>
            </Link>
          </nav>
        );
      })}
      <ThemeToggle />
    </div>
  );
};
