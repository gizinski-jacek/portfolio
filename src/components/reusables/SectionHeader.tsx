import styles from '../../styles/SectionHeader.module.scss';

interface Props {
	text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
	return (
		<div className={styles.section_header}>
			<hr />
			<h2>{text}</h2>
			<hr />
		</div>
	);
};

export default SectionHeader;
