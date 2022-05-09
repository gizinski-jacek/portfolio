import styles from '../../styles/Projects.module.scss';

type Props = {
	data: {
		name: string;
		preview: string;
		github: string;
		demo: string;
	};
};

const ProjectWrapper: React.FC<Props> = ({ data }) => {
	return (
		<div className={styles.project_item}>
			<h3>{data.name}</h3>
			<img src={data.preview} alt={data.name} />
		</div>
	);
};

export default ProjectWrapper;
