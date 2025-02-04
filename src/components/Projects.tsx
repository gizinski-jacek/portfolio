import { useState } from 'react';
import SectionHeader from './reusables/SectionHeader';
import { projectList } from './data/projectList';
import styles from '../styles/Projects.module.scss';
import Modal from './Modal';

declare module 'react' {
	export interface HTMLAttributes<T> {
		'data-slidebackward'?: number;
		'data-slideforward'?: number;
	}
}

const Projects = () => {
	const [slideBackward, setSlideBackward] = useState(0);
	const [slideForward, setSlideForward] = useState(0);
	const [earlierProject, setEarlierProject] = useState(0);
	const [previousProject, setPreviousProject] = useState(1);
	const [currentProject, setCurrentProject] = useState(2);
	const [nextProject, setNextProject] = useState(3);
	const [laterProject, setLaterProject] = useState(4);
	const [modalIsOpen, setModalIsOpen] = useState(false);

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
			setPreviousProject(currentProject);
			setCurrentProject(nextProject);
			setNextProject(laterProject);
			if (laterProject >= projectList.length - 1) {
				setLaterProject(0);
			} else {
				setLaterProject((prevState) => prevState + 1);
			}
		}, 750);
	};

	const openModal = () => {
		document.body.style.overflowY = 'hidden';
		setModalIsOpen(true);
	};

	const closeModal = () => {
		document.body.style.overflowY = 'auto';
		setModalIsOpen(false);
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
							src={projectList[earlierProject].thumbnail}
							alt={projectList[earlierProject].name}
						/>
						<h3>{projectList[earlierProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.previousProject}`}
						onClick={previousSlide}
						data-slidebackward={slideBackward}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideBackward(0);
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[previousProject].thumbnail}
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
						onClick={openModal}
					>
						<img
							src={projectList[currentProject].thumbnail}
							alt={projectList[currentProject].name}
						/>
						<h3>{projectList[currentProject].name}</h3>
					</div>
					<div
						className={`${styles.project_item} ${styles.nextProject}`}
						onClick={nextSlide}
						data-slidebackward={slideBackward}
						data-slideforward={slideForward}
						onAnimationEnd={() => {
							setSlideBackward(0);
							setSlideForward(0);
						}}
					>
						<img
							src={projectList[nextProject].thumbnail}
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
							src={projectList[laterProject].thumbnail}
							alt={projectList[laterProject].name}
						/>
						<h3>{projectList[laterProject].name}</h3>
					</div>
				</div>
				<div className={styles.projects_controls}>
					<div className={styles.arrow} onClick={previousSlide}>
						&#10094;
					</div>
					<div className={styles.links}>
						<a
							className={styles.button}
							href={projectList[currentProject].github}
							target='_blank'
							rel='noreferrer'
						>
							Project GitHub
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
					<div className={styles.arrow} onClick={nextSlide}>
						&#10095;
					</div>
				</div>
			</div>
			{modalIsOpen && (
				<Modal closeModal={closeModal}>
					<img
						style={{
							width: 'auto',
							maxWidth: '100%',
							height: 'auto',
							maxHeight: '100%',
						}}
						src={projectList[currentProject].image}
						alt={projectList[currentProject].name || 'Project preview'}
					/>
				</Modal>
			)}
		</div>
	);
};

export default Projects;
