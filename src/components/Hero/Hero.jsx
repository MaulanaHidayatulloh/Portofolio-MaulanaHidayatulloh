import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Maulana Hidayatulloh Mujanah</h1>
        <p className={styles.description}>
          I am a student at Gunadarma University, this is my portfolio using
          React. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:maulhidayatulloh@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profil.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
