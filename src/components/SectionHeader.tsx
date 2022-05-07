interface Props {
	text: string;
}

const SectionHeader: React.FC<Props> = ({ text }) => {
	return (
		<div className='section_header'>
			<hr />
			<h2>{text}</h2>
			<hr />
		</div>
	);
};

export default SectionHeader;
