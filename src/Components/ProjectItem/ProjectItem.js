import React, { useState } from "react";
import styles from "./ProjectItem.module.css";
import { setProject } from "../../redux/actions/projects";
import { useDispatch, useSelector } from "react-redux";

const ProjectItem = ({ removeProject, index, company, description, title }) => {
  const [hiddenForm, setHiddenForm] = useState(true);
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const changeTitle = e => {
    dispatch(
      setProject(index, {
        projectTitle: e.target.value,
        company: company,
        description: description
      })
    );
  };
  const changeCompany = e => {
    dispatch(
      setProject(index, {
        projectTitle: title,
        company: e.target.value,
        description: description
      })
    );
  };
  const changeDescription = e => {
    dispatch(
      setProject(index, {
        projectTitle: title,
        company: company,
        description: e.target.value
      })
    );
  };

  const remove = () => {
    removeProject(index);
  };

  const toggleHide = () => {
    setHiddenForm(!hiddenForm);
  };

  const toggleHideEdit = () => {
    if (hiddenForm) {
      setHiddenForm(!hiddenForm);
    }
  };

  return (
    <div className={styles.project_item}>
      <div className={theme === "dark" ? styles.header_Dark : styles.header}>
        <p
          className={
            theme === "dark" ? styles.header__title_Dark : styles.header__title
          }
        >
          {!!title ? title : "Project Title"}
        </p>
        <div className={styles.header__btn_container}>
          <button
            className={
              theme === "dark"
                ? styles.header__btn_pen_Dark
                : `${styles.header__btn} ${styles.header__btn_pen}`
            }
            onClick={toggleHideEdit}
          >
            Edit
          </button>
          <button
            className={
              theme === "dark"
                ? styles.header__btn_close_Dark
                : styles.header__btn_close
            }
            onClick={remove}
          >
            Delete
          </button>
          <button
            className={
              theme === "dark"
                ? hiddenForm
                  ? styles.header__btn_hide_down_Dark
                  : styles.header__btn_hide_up_Dark
                : hiddenForm
                ? styles.header__btn_hide_down
                : styles.header__btn_hide_up
            }
            onClick={toggleHide}
          ></button>
        </div>
      </div>
      <form
        className={
          theme === "dark"
            ? hiddenForm
              ? styles.header__form_hide
              : styles.header__form_Dark
            : hiddenForm
            ? styles.header__form_hide
            : styles.header__form
        }
      >
        <div className={styles.header_form_container}>
          <input
            className={styles.form__title}
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={changeTitle}
          ></input>
          <input
            className={styles.form__company}
            type="text"
            placeholder="Company"
            value={company}
            onChange={changeCompany}
          ></input>
        </div>
        <textarea
          className={styles.form__description}
          type="text"
          placeholder="Description"
          value={description}
          onChange={changeDescription}
        ></textarea>
      </form>
    </div>
  );
};

export default ProjectItem;
