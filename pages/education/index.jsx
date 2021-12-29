import React from "react";
import Image from "next/image";
import EducationIcon from "../../images/education.svg";
import { TalentCard } from "../../components/TalentCard";
import styles from "../../styles/Education.module.css";
import BharathIcon from "../../images/bharath.png";
const Education = () => {
  return (
    <div>
      <div className={styles.educationContainer}>
        <Image src={EducationIcon} alt='Education' />
        <div className={styles.headingContainer}>
          <h1>Education</h1>
          <h3>Basic Qualification and Certifications</h3>
          <TalentCard />
        </div>
      </div>
      <div className={styles.educationalCard}>
        <h3>Degrees Received</h3>

        <div className={styles.degree}>
          <Image src={BharathIcon} alt='bharath' />
          <div className={styles.educationContent}>
            <div className={styles.maindata}>
              <div>
                <h3>
                  Bharath University <div className={styles.removeData}>,Chennai</div>
                </h3>
                <h5>B.E in Electronics and Communication Engineering</h5>
              </div>
              <div>2016 - 2020</div>
            </div>
            <div>
              <p>⚡ I have studied electronics and communications.</p>
              <p>
                ⚡ Apart from this, I have done courses on Web Development, HTML, CSS, JavaScript, ReactJS, NextJs and
                Python.
              </p>
              <p>
                ⚡ I was selected for Internship in 3rd year.In entire college only 3% students got selected for
                Intership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
