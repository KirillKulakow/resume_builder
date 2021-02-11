import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styles from "./Registration.module.css";
import { paths } from "../../constants";
import { createUserRegistration } from "../../redux/operations/user";
import {clearUserError} from "../../redux/actions/user";

const formInitialState = {
  email: "",
  password: "",
};

const Registration = () => {
  const [form, setForm] = useState(formInitialState),
      dispatch = useDispatch(),
      history = useHistory(),
      user = useSelector((state) => state.user),
      [isLoading, setIsLoading] = useState(false);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: form.email,
      password: form.password,
    };
    try{
      dispatch(clearUserError())
      setForm(formInitialState)
      setIsLoading(true)
      await createUserRegistration(userData, history)(dispatch)
    } finally {
      setIsLoading(false)
    }
  };

  const { email, password } = form;

  return (
    <div className={styles.registrationPage}>
      <div className={styles.registrationModule}>
        <p className={styles.preTitle}>Resume Builder</p>
        <h2 className={styles.pageTitle}>Registration</h2>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="email"
              placeholder="E-mail"
              id="RB6EmailInput"
              name="email"
              value={email}
              onChange={inputHandler}
            />
            <label className={styles.label} htmlFor="RB6EmailInput">
              E-mail
            </label>
          </div>
          <div className={styles.formDiv}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="RB6PasswordInput"
              name="password"
              value={password}
              onChange={inputHandler}
            />
            <label className={styles.label} htmlFor="RB6PasswordInput">
              Password
            </label>
            <p className={styles.error}>{user.error && user.error.message}</p>
          </div>
          <button className={styles.button}>{isLoading? <div className="lds-ellipsis">
            <div/>
            <div/>
            <div/>
            <div/>
          </div> : "Register"}</button>
        </form>
        <p className={styles.message}>
          Have account already?
          <Link to={paths.login} className={styles.link}>
            Log in
          </Link>
        </p>
        <div className={styles.blackBox}/>
        <div className={styles.orangeBox}/>
        <div className={styles.rightCircle}/>
        <div className={styles.bigCircle}/>
        <div className={styles.middleCircle}/>
      </div>
    </div>
  );
};

export default Registration;
