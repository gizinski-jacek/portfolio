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
			<div className={styles.socials}>
				<a
					href='https://github.com/gizinski-jacek'
					rel='noreferrer'
					className={styles.github}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						width='64'
						height='64'
					>
						<path
							fillRule='evenodd'
							fill='currentColor'
							d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z'
						></path>
					</svg>
					<h4>GitHub</h4>
				</a>
				<a
					href='https://www.linkedin.com/in/gizinski-jacek'
					rel='noreferrer'
					className={styles.linkedin}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 32 32'
						width='64'
						height='64'
					>
						<path
							fill='currentColor'
							d='M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z'
						/>
						<path
							fill='#fff'
							d='M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z'
						/>
					</svg>
					<h4>LinkedIn</h4>
				</a>
				<a
					href='mailto:gizinski.jacek.tr@gmail.com'
					rel='noreferrer'
					className={styles.email}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1000 1000'
						width='1000mm'
						height='1000mm'
					>
						<path
							fill='currentColor'
							d='M 900 163C 934 163 962 191 962 225C 962 225 962 305 962 305C 962 305 579 569 579 569C 545 592 521 600 500 600C 479 600 455 592 421 569C 421 569 38 305 38 305C 38 305 38 225 38 225C 38 191 66 163 100 163C 100 163 900 163 900 163M 379 631C 379 631 379 631 379 631C 420 658 459 675 500 675C 541 675 580 658 621 631C 621 631 621 631 621 631C 621 631 962 396 962 396C 962 396 962 800 962 800C 962 834 934 862 900 862C 900 862 100 862 100 862C 66 862 38 834 38 800C 38 800 38 396 38 396C 38 396 379 631 379 631'
						></path>
					</svg>
					<h4>Email</h4>
				</a>
			</div>
		</div>
	);
};

export default Home;
