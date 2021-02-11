import React from "react";
import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../../constants";
import DashboardItem from "../../Components/Dashboard/DashboardItem";
import DashboardItemV2 from "../../Components/Dashboard/DashboardItemV2";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const resumeList = useSelector((state) => state.resumeCollection);

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.created}>Created Resume</h1>
      <NavLink to={paths.editor} className={styles.createButton}>
        Create New
      </NavLink>

      <div className={styles.preloader}>
        {!!resumeList.length ? (
          resumeList.map((el, index) => <DashboardItemV2 {...el} key={index} />)
        ) : (
          <DashboardItem />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
