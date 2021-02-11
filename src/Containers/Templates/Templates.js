import React from "react";
import styles from "./Templates.module.css";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeType } from "../../redux/actions/basicInfo";
import Template_1 from "../../Components/ResumeTemplate1/ResumeTemplate1";
import Template_2 from "../../Components/ResumeTemplate2/ResumeTemplate2";
import { paths } from "../../constants";

const Templates = (props) => {
  const theme = useSelector(state => state.theme),
        typeOfResume = useSelector(state => state.resume.basicInfo.type),
        isResumeOneStyle = props.location.pathname === paths.templates,
        isResumeOneRedirect = typeOfResume === 1,
        dispatch = useDispatch(),
        changeNumber = number => {
          dispatch(changeType(number));
        };



  return (
    <div
      className={
        theme === "dark" ? styles.mainWrapperDark : styles.mainWrapperLight
      }
    >
      <div className={styles.LinkWrapper}>
        <NavLink
          to={paths.editor}
          className={isResumeOneStyle ? styles.LinkNewResumeActive : styles.LinkNewResumeNotActive}
          onClick={() => changeNumber(1)}
        />
        <NavLink
          exact
          to={`${paths.templates}`}
          className={
            theme === "dark"
              ? `${styles.LinkDarkTheme} ${styles.Link}`
              : styles.Link
          }
          activeClassName={
            theme === "dark"
              ? `${styles.ActiveLink} ${styles.ActiveLinkDark}`
              : styles.ActiveLink
          }
          onClick={() => changeNumber(1)}
        >
          Resume v.1
        </NavLink>
        <NavLink
          to={paths.editor}
          className={isResumeOneStyle ? styles.LinkNewResumeNotActive : styles.LinkNewResumeActive}
          onClick={() => changeNumber(2)}
        />
        <NavLink
          to={`${paths.templates}/2`}
          className={
            theme === "dark"
              ? `${styles.LinkDarkTheme} ${styles.Link}`
              : styles.Link
          }
          activeClassName={
            theme === "dark"
              ? `${styles.ActiveLink} ${styles.ActiveLinkDark}`
              : styles.ActiveLink
          }
          onClick={() => changeNumber(2)}
        >
          Resume v.2
        </NavLink>
      </div>

      <Switch>
        <Route exact path={`${paths.templates}`} component={Template_1}>
          {!isResumeOneRedirect ? <Redirect to={`${paths.templates}/2`} component={Template_2}/> : ""}
        </Route>
        <Route exact path={`${paths.templates}/2`} component={Template_2}/>
        <Route path="*">
          <Redirect to={paths.dashboard}/>
        </Route>
      </Switch>
    </div>
  );
};

export default Templates;
