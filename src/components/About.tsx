import SectionHeader from './reusables/SectionHeader';
import styles from '../styles/About.module.scss';

const About = () => {
	return (
		<div id='about' className={styles.about}>
			<SectionHeader text={'About'} />
			<p>
				<img src='./previews/programming.svg' alt='Programming' />
				Hello! My name is Jacek Giziński, I am a self-taught developer and web
				designer. Starting from no coding knowledge in February of 2021 I became
				immersed in the world of programming. Reading through resources such as
				The Odin Project and freecodecamp I have been developing the necessary
				skills for becoming a full stack developer.
			</p>
			<p>
				<img src='./previews/gaming.svg' alt='Gaming' />
				I'm highly motivated and looking to expand my knowledge and skill set.
				Passionate about web development and software engineering. Besides
				programming You will catch me playing video games of various kind,{' '}
				<img src='./previews/formula1.svg' alt='Formula 1' /> tuned into Formula
				1 or Indycar races on the weekends, or just relaxing while listening to
				music.
			</p>
		</div>
	);
};

export default About;
