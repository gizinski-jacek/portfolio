import { useState } from 'react';
import SectionHeader from './reusables/SectionHeader';
import ProjectWrapper from './utils/ProjectWrapper';
import { projectList } from './data/projectList';
import styles from '../styles/Projects.module.scss';

const Projects = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const nextSlide = () => {
		if (slideIndex > document.querySelectorAll('.project_item').length) {
			setSlideIndex(0);
		} else {
			setSlideIndex((prevState) => prevState + 1);
		}
	};

	const previousSlide = () => {
		if (slideIndex <= 0) {
			setSlideIndex(document.querySelectorAll('.project_item').length);
		} else {
			setSlideIndex((prevState) => prevState - 1);
		}
	};

	const projectsDisplay = projectList.map((project, index) => {
		return <ProjectWrapper key={index} data={project} />;
	});

	return (
		<div id='projects' className={styles.projects}>
			<SectionHeader text={'Featured Projects'} />
			<div className={styles.section_projects}>
				<div className={styles.container}>{projectsDisplay}</div>
				<div className={styles.projects_controls}>
					<div className={styles.arrow} onClick={() => previousSlide()}>
						&#10094;
					</div>
					<div className={styles.links}>
						<a
							href={projectList[slideIndex].github}
							rel='noreferrer'
							className={styles.button}
						>
							Project Github
						</a>
						<a
							href={projectList[slideIndex].demo}
							rel='noreferrer'
							className={styles.button}
						>
							Project Demo
						</a>
					</div>
					<div className={styles.arrow} onClick={() => nextSlide()}>
						&#10095;
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
