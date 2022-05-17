import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styles from '../styles/Home.module.scss';

const Home = () => {
	const textRef = useRef<any>(null);
	const typedRef = useRef<any>(null);

	useEffect(() => {
		const typedOptions = {
			backDelay: 1500,
			backSpeed: 75,
			typeSpeed: 100,
			loop: true,
			loopCount: Infinity,
			showCursor: false,
			strings: [
				'Developer',
				'Engineer',
				'PC Gamer',
				'Formula 1 Fan',
				'Music Enjoyer',
			],
		};

		typedRef.current = new Typed(textRef.current, typedOptions);

		return () => {
			typedRef.current.destroy();
		};
	}, []);

	return (
		<div id='home' className={styles.home}>
			<h1>Jacek Giziński</h1>
			<h2>
				&gt;
				<span ref={textRef}></span>
			</h2>
		</div>
	);
};

export default Home;
