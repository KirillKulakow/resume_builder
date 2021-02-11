import React from "react";
import styles from "./ResumeTemplates.module.css";
import { useSelector } from "react-redux";
import moment from "moment";

const ResumeTemplate2 = () => {
	const resumeInfo = useSelector((state) => state.resume);
	let {
		basicInfo: {
			jobTitle,
			firstName,
			lastName,
			email,
			phone,
			country,
			city,
			summary,
		},
		employmentHistory,
		educations,
		skills,
		projects,
		languages,
	} = resumeInfo;

	// Для перевірки у випадку відсутності даних в state
	//
	// jobTitle = null;
	// firstName = null;
	// lastName = null;
	// email = null;
	// phone = null;
	// country = null;
	// city = null;
	// summary = null;
	// employmentHistory = [];
	// educations = [];
	// skills = [];
	// projects = [];
	// languages = [];

	return (
		<div className={styles.ResumeWrapper}>
			<div className={styles.Container}>
				<div className={styles.ResumeHeding}>
					<h1 className={styles.ResumeTitle}>
						{firstName ? `${firstName}` : "Daniel"}
						{lastName ? `${lastName}` : "Jonson"}
					</h1>
					<p className={styles.ResumeSubtitle}>
						{jobTitle ? jobTitle : "Front-End Developer"}
					</p>
					<div className={styles.ContactsContainer}>
						<div className={styles.ContactItem}>
							<div className={`${styles.Map} ${styles.Icon}`}/>
							<p className={styles.ContactText}>
								{city ? `${city}` : "Kyiv"},{country ? `${country}` : "Ukraine"}
							</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Phone} ${styles.Icon}`}/>
							<p className={styles.ContactText}>
								{phone ? phone : "+38 000 111 11 11"}
							</p>
						</div>
						<div className={styles.ContactItem}>
							<div className={`${styles.Mail} ${styles.Icon}`}/>
							<p className={styles.ContactText}>
								{email ? email : "your_email@sample.com "}
							</p>
						</div>
					</div>
				</div>
				<div className={styles.ResumeBody}>
					<div className={styles.column1}>
						<div>
							<div>
								<h2 className={styles.BoxName}>PROFILE</h2>
								<p className={styles.BoxText}>
									{summary
										? summary
										: "I am currently looking for a company that has a common goal to provide high-quality services with passion, resulting in satisfaction for both the business and the employees. As a motivated team player, I would like to work on interesting projects with people, who will become my second family."}
								</p>
							</div>
							{
								<div>
									<h2 className={styles.BoxName}>EMPLOYMENT HISTORY</h2>
									{!!employmentHistory.length ? (
										employmentHistory.map((el) => (
											<div key={`${el.jobTitle}, ${el.employer}, ${el.city}`}>
												<h3 className={styles.BoxTitle}>
													{`${el.jobTitle}, ${el.employer}, ${el.city}`}
												</h3>
												<p className={styles.BoxSubtitle}>
													{el.start
														? `${moment(el.start).format("MMM YYYY")}`
														: ""}
													-
													{el.end ? `${moment(el.end).format("MMM YYYY")}` : ""}
												</p>
												<p className={styles.BoxText}>{el.description}</p>
											</div>
										))
									) : (
										<div>
											<h3 className={styles.BoxTitle}>
												Front-End Developer, Data Media LLC, Kyiv
											</h3>
											<p className={styles.BoxSubtitle}>Jan 2020 - Jul 2020</p>
											<p className={styles.BoxText}>
												Responsive website development in close cooperation with
												Back end Department; Maintaining, updating and
												debugging; Prevention of possible vulnerabilities during
												design investigation;
											</p>
										</div>
									)}
								</div>
							}
							{
								<div>
									<h2 className={styles.BoxName}>education</h2>
									{!!educations.length ? (
										educations.map((el) => (
											<div
												key={`${el.school}, ${el.degree}`}
												className={styles.EducationItem}
											>
												<h3
													className={styles.BoxTitle}
												>{`${el.school}, ${el.degree}`}</h3>
												<p className={styles.BoxSubtitle}>
													{el.start
														? `${moment(el.start).format("MMM YYYY")}`
														: ""}
													-
													{el.end ? `${moment(el.end).format("MMM YYYY")}` : ""}
												</p>
											</div>
										))
									) : (
										<>
											<div className={styles.EducationItem}>
												<h3 className={styles.BoxTitle}>
													GoIT Courses, Front-End Developer, Kyiv
												</h3>
												<p className={styles.BoxSubtitle}>
													Sep 2019 - Jul 2020
												</p>
											</div>
											<div className={styles.EducationItem}>
												<h3 className={styles.BoxTitle}>
													NTUU “KPI”, Computer Engineering, Kyiv
												</h3>
												<p className={styles.BoxSubtitle}>
													Sep 2015 - May 2019
												</p>
											</div>
										</>
									)}
								</div>
							}
							{
								<div>
									<h2 className={styles.BoxName}>projects</h2>
									{!!projects.length ? (
										projects.map((el) => (
											<div key={el.projectTitle}>
												<h3 className={styles.BoxTitle}>{el.projectTitle}</h3>
												<p className={styles.BoxSubtitle}>{el.company}</p>
												<p className={styles.BoxText}>{el.description}</p>
											</div>
										))
									) : (
										<div>
											<h3 className={styles.BoxTitle}>YouTube</h3>
											<p className={styles.BoxSubtitle}>Google</p>
											<p className={styles.BoxText}>
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Exercitationem quis impedit consequuntur animi non
												ab facilis ad unde sequi ipsa.
											</p>
										</div>
									)}
								</div>
							}
							{
								<div>
									<h2 className={styles.BoxName}>languages</h2>
									{!!languages.length ? (
										languages.map((el) => (
											<div key={el.language} className={styles.EducationItem}>
												<h3 className={styles.BoxTitle}>{el.language}</h3>
												<p className={styles.BoxSubtitle}>{el.level}</p>
											</div>
										))
									) : (
										<div className={styles.EducationItem}>
											<h3 className={styles.BoxTitle}>Ukrainian</h3>
											<p className={styles.BoxSubtitle}>native</p>
										</div>
									)}
								</div>
							}
						</div>
					</div>
					<div className={styles.column2}>
						{
							<div>
								<h2 className={styles.BoxName}>SKILLS</h2>
								<ul className={styles.ScillsList}>
									{!!skills.length ? (
										skills.map((el) => <li key={el.skill}>{el.skill}</li>)
									) : (
										<>
											<li>HTML5</li>
											<li>SASS/SCSS</li>
											<li>JavaScript</li>
											<li>ES6 +</li>
											<li>React / Redux</li>
											<li>Bootstrap</li>
											<li>jQuery</li>
											<li>Git</li>
											<li>NPM</li>
											<li>Axios</li>
											<li>Responsive web</li>
											<li>design</li>
											<li> Adobe Photoshop</li>
										</>
									)}
								</ul>
							</div>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResumeTemplate2;
