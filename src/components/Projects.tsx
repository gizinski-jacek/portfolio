import { useState } from 'react';
import SectionHeader from './reusables/SectionHeader';
import { projectList } from './data/projectList';
import styles from '../styles/Project.module.scss';

declare module 'react' {
	export interface HTMLAttributes<T> {
		'data-slidebackward'?: any;
		'data-slideforward'?: any;
	}
}

const Projects = () => {
	const [slideBackward, setSlideBackward] = useState(0);
	const [slideForward, setSlideForward] = useState(0);
	const [earlierProject, setEarlierProject] = useState(projectList.length - 1);
	const [previousProject, setPreviousProject] = useState(0);
	const [currentProject, setCurrentProject] = useState(1);
	const [nextProject, setNextProject] = useState(2);
	const [laterProject, setLaterProject] = useState(3);

	const previousSlide = () => {
		setSlideForward(1);
		setTimeout(() => {
			setLaterProject(nextProject);
			setNextProject(currentProject);
			setCurrentProject(previousProject);
			setPreviousProject(earlierProject);
			if (earlierProject <= 0) {
				setEarlierProject(projectList.length - 1);
			} else {
				setEarlierProject((prevState) => prevState - 1);
			}
		}, 750);
	};

	const nextSlide = () => {
		setSlideBackward(1);
		setTimeout(() => {
			setEarlierProject(previousProject);
			setPreviousProject(earlierProject);
			setCurrentProject(nextProject);
			setNextProject(laterProject);
			if (laterProject >= projectList.length - 1) {
				setLaterProject(0);
			} else {
				setLaterProject((prevState) => prevState + 1);
			}
		}, 750);
	};

	return (
		<div id='projects' className={styles.projects}>
			<SectionHeader text={'Featured Projects'} />
			<div className={styles.section_projects}>
				<div className={styles.container}>
					<div
						className={`${styles.project_item} ${styles.earlierProject}`}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[earlierProject].preview}
							alt={projectList[earlierProject].name}
						/>
						<h3>{projectList[earlierProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.previousProject}`}
						data-slidebackward={slideBackward}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideBackward(0);
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[previousProject].preview}
							alt={projectList[previousProject].name}
						/>
						<h3>{projectList[previousProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.currentProject}`}
						data-slidebackward={slideBackward}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideBackward(0);
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[currentProject].preview}
							alt={projectList[currentProject].name}
						/>
						<h3>{projectList[currentProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.nextProject}`}
						data-slidebackward={slideBackward}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideBackward(0);
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[nextProject].preview}
							alt={projectList[nextProject].name}
						/>
						<h3>{projectList[nextProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.laterProject}`}
						data-slidebackward={slideBackward}
						onAnimationEnd={() => {
							setSlideBackward(0);
						}}
					>
						<img
							src={projectList[laterProject].preview}
							alt={projectList[laterProject].name}
						/>
						<h3>{projectList[laterProject].name}</h3>
					</div>
				</div>
				<div className={styles.projects_controls}>
					<div className={styles.arrow} onClick={() => previousSlide()}>
						&#10094;
					</div>
					<div className={styles.links}>
						<a
							className={styles.button}
							href={projectList[currentProject].github}
							target='_blank'
							rel='noreferrer'
						>
							Project Github
						</a>
						<a
							className={styles.button}
							href={projectList[currentProject].demo}
							target='_blank'
							rel='noreferrer'
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
