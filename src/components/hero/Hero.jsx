import React from "react";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.main}>
      <img src="/assets/hero.png" alt="" />
    </div>
  );
};

export default Hero;
