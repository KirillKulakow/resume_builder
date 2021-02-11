import React from "react";
import styles from "./PreviewT2.module.css";

const Project = ({ projectTitle, company, description }) => {
  return (
    <div>
      <h4 className={styles.title}>
        {projectTitle}, {company}
      </h4>
      <p className={styles.summary}>{description}</p>
    </div>
  );
};

export default Project;
