import React from "react";
import styles from "./PreviewT2.module.css";
import moment from "moment";

const Education = ({ school, degree, start, end }) => {
  return (
    <div>
      <h4 className={styles.title}>
        {school}, {degree}
      </h4>
      <p className={styles.date}>
          {`${moment(start).format("MMM YYYY")} - ${moment(
              end
          ).format("MMM YYYY")}`}
      </p>
    </div>
  );
};

export default Education;
