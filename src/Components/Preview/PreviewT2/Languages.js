import React from "react";
import styles from "./PreviewT2.module.css";

const Languages = ({ language, level }) => {
  return (
    <div>
      <h4 className={styles.title}>{language}</h4>
      <p className={styles.date}>{level}</p>
    </div>
  );
};

export default Languages;
