import React from "react";
import { useSelector } from "react-redux";
import styles from "./AddButton.module.css";

const AddButton = ({ onClick, title }) => {
  const theme = useSelector(state => state.theme);
  return (
    <button
      className={theme === "dark" ? styles.Add_Btn_Dark : styles.Add_Btn}
      onClick={onClick}
      type="submit"
    >
      Add {title}
    </button>
  );
};

export default AddButton;
