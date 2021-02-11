import React from "react";
import styles from "./DashboardItem.module.css";
import PreloaderV1 from "./PreloaderV1";

const DashboardItem = () => {
  return (
    <div className={styles.resumeItem}>
      <div className={styles.resumeName}>No resume found</div>
      <div className={styles.resume}>
        <PreloaderV1 />
      </div>
      {/* <div className={styles.buttonBlock}>
        <button className={styles.button}>
          <img src="/icons/Dowload.svg" className={styles.buttonSvg} /> Download
        </button>
        <button className={styles.button}>
          <img src="/icons/Edit.svg" className={styles.buttonSvg} />
          Edit
        </button>
        <button className={styles.button}>
          <img src="/icons/Delete.svg" className={styles.buttonSvg} />
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default DashboardItem;
