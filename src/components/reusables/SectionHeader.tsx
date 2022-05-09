import styles from '../../styles/SectionHeader.module.scss';

type Props = {
	text: string;
};

const SectionHeader: React.FC<Props> = ({ text }) => {
	return (
		<div className={styles.header}>
			<hr />
			<h2>{text}</h2>
			<hr />
		</div>
	);
};

export default SectionHeader;
