import React from "react";
import { useSelector } from "react-redux";
import EmploymentHistoryList from "./employmentHistoryList";
import Education from "./Education";
import Skills from "./Skills";

import styles from "./PreviewT2.module.css";
import Languages from "./Languages";
import Project from "./Project";

const PreviewT2 = () => {
  const {
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phone,
    email,
    summary,
  } = useSelector((state) => state.resume.basicInfo);

  const employmentHistory = useSelector(
    (state) => state.resume.employmentHistory,
  );

  const education = useSelector((state) => state.resume.educations);
  const skills = useSelector((state) => state.resume.skills);
  const languages = useSelector((state) => state.resume.languages);
  const projects = useSelector((state) => state.resume.projects);

  return (
    <div className={styles.previewT2}>
      <h1 className={styles.name}>
        {firstName} {lastName}
      </h1>
      <h2 className={styles.jobTitle}>{jobTitle}</h2>

      <div className={styles.location}>
        <div className={styles.svg}>
          {city && country ? (
            <>
              <img src="/icons/location.svg" alt='Location' className={styles.icon} />
              <p>{`${city}, ${country}`}</p>
            </>
          ) : null}
        </div>
        <div className={styles.svg}>
          {phone && (
            <>
              <img src="/icons/Phone.svg" alt='Phone' className={styles.icon} />
              <p className="phone">{phone}</p>
            </>
          )}
        </div>
        <div className={styles.svg}>
          {email && (
            <>
              <img src="/icons/Email.svg" alt='Email' className={styles.icon} />
              <p className="email">{email}</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.resumeBlock}>
        <div className={styles.profile}>
          {summary && (
            <>
              <h3 className={styles.nameBlock}>Profile</h3>
              <p className={styles.summary}>{summary}</p>
            </>
          )}
        </div>
        {employmentHistory.length > 0 && (
          <div className={styles.history}>
            <h3 className={styles.nameBlock}>Employment history</h3>
            <ul>
              {employmentHistory.map((el) => (
                <li key={el.jobTitle} className={styles.list}>
                  <EmploymentHistoryList {...el} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {education.length > 0 && (
          <div className={styles.education}>
            <h3 className={styles.nameBlock}>Education</h3>
            <ul>
              {education.map((el) => (
                <li key={el.school} className={styles.list}>
                  <Education {...el} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {languages.length > 0 && (
          <div className={styles.languages}>
            <h3 className={styles.nameBlock}>Languages</h3>
            <ul>
              {languages.map((el) => (
                <li key={el.language} className={styles.list}>
                  <Languages {...el} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {projects.length > 0 && (
          <div className={styles.projects}>
            <h3 className={styles.nameBlock}>Projects</h3>
            <ul>
              {projects.map((el) => (
                <li key={el.jobTitle} className={styles.list}>
                  <Project {...el} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {skills.length > 0 && (
          <div className={styles.skills}>
            <h3 className={styles.nameBlock}>skills</h3>
            <ul>
              {skills.map((skill) => (
                <li className={styles.skill}>
                  <Skills {...skill} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewT2;
