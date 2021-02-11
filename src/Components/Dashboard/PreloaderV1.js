import React from "react";
import styles from "./PreloaderV1.module.css";

const PreloaderV1 = () => {
  return (
    <div>
      <div className={styles.gridTemplate}>
        <p className={`${styles.one} ${styles.dashboard_text}`}></p>
        <p className={`${styles.two} ${styles.dashboard_text}`}></p>
        <p className={`${styles.three} ${styles.dashboard_text}`}></p>
        <p className={`${styles.four} ${styles.dashboard_text}`}></p>

        <p className={`${styles.six} ${styles.dashboard_text}`}></p>

        <p className={`${styles.eight} ${styles.dashboard_text}`}></p>
        <p className={`${styles.nine} ${styles.dashboard_text}`}></p>
      </div>
    </div>
  );
};

export default PreloaderV1;
