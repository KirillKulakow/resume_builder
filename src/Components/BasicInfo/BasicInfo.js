import React from "react";
import InputMask from "react-input-mask";
import styles from "./BasicInfo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeBasicInputs } from "../../redux/actions/basicInfo";
import {
  getTitle,
  getJobTitle,
  getFirstName,
  getLastName,
  getEmail,
  getPhone,
  getCountry,
  getCity,
  getSummary
} from "../../redux/selectors/basicInfo";
const BasicInfo = () => {
  const dispatch = useDispatch();
  const title = useSelector(state => getTitle(state));
  const jobTitle = useSelector(state => getJobTitle(state));
  const firstName = useSelector(state => getFirstName(state));
  const lastName = useSelector(state => getLastName(state));
  const email = useSelector(state => getEmail(state));
  const phone = useSelector(state => getPhone(state));
  const country = useSelector(state => getCountry(state));
  const city = useSelector(state => getCity(state));
  const summary = useSelector(state => getSummary(state));
  const theme = useSelector(state => state.theme);

  const inputHandler = e => {
    dispatch(changeBasicInputs(e));
  };

  return (
    <div>
      <form className={styles.basicForm}>
        <input
          className={styles.titleInput}
          type="text"
          name="title"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={inputHandler}
        />

        <h2
          className={
            theme === "dark"
              ? `${styles.caption} ${styles.captionDarkTheme}`
              : styles.caption
          }
        >
          Personal Details
        </h2>
        <input
          className={styles.jobTitle}
          type="text"
          name="jobTitle"
          placeholder="Job title"
          value={jobTitle}
          onChange={inputHandler}
        />
        <div className={styles.smallInputsWrapper}>
          <input
            className={styles.smallInput}
            type="text"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={inputHandler}
          />

          <InputMask
            mask="+99 (999) 99 999 99"
            maskChar="_"
            className={styles.smallInput}
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={inputHandler}
          />
          <input
            className={styles.smallInput}
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={inputHandler}
          />
        </div>

        <h2
          className={
            theme === "dark"
              ? `${styles.caption} ${styles.captionDarkTheme}`
              : styles.caption
          }
        >
          Professional Summary
        </h2>
        <textarea
          className={styles.summaryInput}
          type="text"
          name="summary"
          placeholder="Summary"
          rows="11"
          value={summary}
          onChange={inputHandler}
        />
      </form>
    </div>
  );
};

export default BasicInfo;
