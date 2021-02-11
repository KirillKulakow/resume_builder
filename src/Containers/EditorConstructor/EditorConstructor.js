import React from "react";
import styles from "./EditorConstructor.module.css";

import BasicInfo from "../../Components/BasicInfo/BasicInfo";
import EmploymentHistory from "../../Components/EmploymentHistory/EmploymentHistory";
import Skills from "../../Components/Skills/Skills";
import Languages from "../../Components/Languages/Languages";
import Projects from "../../Components/Projects/Projects";
import Education from "../../Components/Education/Education";

const EditorConstructor = () => {
  return (
    <div className={styles.MainWrapper}>
      <BasicInfo />
      <EmploymentHistory />
      <Skills />
      <Languages />
      <Projects />
      <Education />
    </div>
  );
};

export default EditorConstructor;
