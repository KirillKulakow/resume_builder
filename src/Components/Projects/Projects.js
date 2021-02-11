import React from "react";
import styles from "./Projects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { addProject, deleteProject } from "../../redux/actions/projects";
import { connect, useDispatch, useSelector } from "react-redux";
import AddButton from "../AddButton/AddButton";

const Projects = ({ projects }) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const handleAddClick = () => {
    dispatch(addProject({ projectTitle: "", company: "", description: "" }));
  };

  const handleRemoveClick = index => {
    dispatch(deleteProject(index));
  };

  return (
    <div className={styles.project_item}>
      <h3 className={theme === "dark" ? styles.title_Dark : styles.title}>
        Projects
      </h3>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          removeProject={handleRemoveClick}
          index={index}
          company={project.company}
          description={project.description}
          title={project.projectTitle}
        />
      ))}
      <AddButton onClick={handleAddClick} title={"Project"} />
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.resume.projects
});

export default connect(mapStateToProps)(Projects);
