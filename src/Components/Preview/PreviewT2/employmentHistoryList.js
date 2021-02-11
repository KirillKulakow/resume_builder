import React from "react";
import styles from "./PreviewT2.module.css";
import moment from "moment";

const employmentHistoryList = ({
  jobTitle,
  employer,
  start,
  city,
  end,
  description,
}) => {
  return (
    <div>
      <h4 className={styles.title}>
        {jobTitle}, {employer}, {city}
      </h4>
      <p className={styles.date}>
        {`${moment(start).format("MMM YYYY")}`}-
        {`${moment(end).format("MMM YYYY")}`}
      </p>
      <p className={styles.summary}>{description}</p>
    </div>
  );
};

export default employmentHistoryList;
