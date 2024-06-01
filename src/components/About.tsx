import SectionHeader from './reusables/SectionHeader';
import styles from '../styles/About.module.scss';

const About = () => {
	return (
		<div id='about' className={styles.about}>
			<SectionHeader text={'About'} />
			<div className={styles.container}>
				<img src='./images/person-at-desk_5467547.webp' alt='Person at desk' />
				<article>
					<p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
							x='0px'
							y='0px'
						>
							<circle fill='#25B6D2' cx='256' cy='256' r='256' />
							<g>
								<path
									fill='#FFD07D'
									d='M83.928,259.304L201.32,204.8v25.92l-88.776,38.88v0.488l88.8,38.888v25.92l-117.416-54.56   C83.928,280.336,83.928,259.304,83.928,259.304z'
								/>
								<path
									fill='#FFD07D'
									d='M219.448,344.656l52.336-177.32h24.696l-52.336,177.32H219.448z'
								/>
								<path
									fill='#FFD07D'
									d='M428.072,281.064L310.68,334.872v-25.92l90.736-38.888V269.6l-90.736-38.912V204.8l117.392,53.808   V281.064z'
								/>
							</g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
						</svg>
						Hello! My name is Jacek Giziński, I am a self-taught full-stack web
						developer specializing in JavaScript seeking to pursue my newfound
						passion and start a new career in tech. Starting from no coding
						knowledge in February of 2021 I became immersed in the world of
						programming. Reading through resources such as The Odin Project and
						freecodecamp I was able to obtain fundamental skills and knowledge
						of web developement. I am constantly seeking opportunities to learn
						new concepts, technologies, and tools to become better full-stack
						developer.
					</p>
					<p>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 1024 1024'
							width='1024px'
							height='1024px'
						>
							<circle cx='512' cy='512' r='512' fill='#607d8b' />
							<path
								d='M487 487c0 13.8-11.2 25-25 25h-25v25c0 13.8-11.2 25-25 25s-25-11.2-25-25v-25h-25c-13.8 0-25-11.2-25-25s11.2-25 25-25h25v-25c0-13.8 11.2-25 25-25s25 11.2 25 25v25h25c13.8 0 25 11.2 25 25zm125.3 25c0-13.8-11.2-25-25-25h-.3c-13.8 0-24.9 11.2-24.9 25s11.3 25 25.1 25 25.1-11.2 25.1-25zm75-50c0-13.8-11.2-25-25-25h-.3c-13.8 0-24.9 11.2-24.9 25s11.3 25 25.1 25 25.1-11.2 25.1-25zM787 612c0-39.5-14.4-160.6-17.3-184.5l-.3-3.3c-6.6-64-60-112.2-124.3-112.2H379c-64.3 0-117.8 48.2-124.5 113.2l-.2 2.3c-2.9 23.9-17.3 145-17.3 184.4 0 55.1 44.9 100 100 100 35.4 0 54-18.7 67.7-32.3l35.4-35.4c4.7-4.7 11.1-7.3 17.7-7.3h108.6c6.6 0 13 2.7 17.7 7.3l35.4 35.4C633 693.3 651.6 712 687 712c55.1 0 100-44.9 100-100zm-382.3-3-35.4 35.4C357.1 656.6 351.1 662 337 662c-27.6 0-50-22.4-50-50 0-37.3 15.2-164.1 17-178.6l.4-4.1c3.9-38.4 36-67.3 74.6-67.3h266c38.6 0 70.7 28.9 74.6 67.1l.5 4.4c6.3 52 16.9 148 16.9 178.4 0 27.6-22.4 50-50 50-14.1 0-20.1-5.4-32.3-17.7L619.3 609c-14.2-14.2-33-22-53-22H457.7c-20 0-38.8 7.8-53 22z'
								fill='#fff'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 297 297'
							x='0px'
							y='0px'
						>
							<g>
								<g>
									<g>
										<g>
											<circle fill='#17AB93' cx='148.5' cy='148.5' r='148.5' />
										</g>
									</g>
								</g>
								<path
									fill='#0E8C74'
									d='M296.966,145.8l-87.722-87.768c-4.73,0.082-11.437-2.455-15.744-3.532c-24-6-47-17-72-9   c-37,13-50,55-59,93c-4.927,24.633-14.937,46.875-22.034,70.301l86.662,86.661c6.98,1.006,14.114,1.537,21.372,1.537   c82.014,0,148.5-66.486,148.5-148.5C297,147.597,296.982,146.699,296.966,145.8z'
								/>
								<g>
									<path
										fill='#BDC3C7'
										d='M61.413,214.729c-0.145,0.032-0.29,0.065-0.435,0.097c-12.91,2.886-25.411-6.151-26.796-19.307    c-1.575-14.966-1.575-30.056,0-45.022c1.385-13.156,13.886-22.193,26.796-19.307c0.145,0.032,0.29,0.065,0.435,0.097    c10.912,2.439,18.329,12.654,17.152,23.773c-1.263,11.931-1.263,23.963,0,35.894C79.742,202.075,72.325,212.289,61.413,214.729z'
									/>
								</g>
								<g>
									<path
										fill='#BDC3C7'
										d='M233.087,214.729c0.145,0.032,0.29,0.065,0.435,0.097c12.91,2.886,25.411-6.151,26.796-19.307    c1.575-14.966,1.575-30.056,0-45.022c-1.385-13.156-13.886-22.193-26.796-19.307c-0.145,0.032-0.29,0.065-0.435,0.097    c-10.912,2.439-18.329,12.654-17.152,23.773c1.263,11.931,1.263,23.963,0,35.894C214.758,202.075,222.175,212.289,233.087,214.729    z'
									/>
								</g>
								<path
									fill='#393F42'
									d='M246.189,148.033c-0.821-7.801-5.166-14.293-11.219-18.162c0.35-3.175,0.53-6.381,0.53-9.614   c0-47.972-39.028-87-87-87s-87,39.028-87,87c0,3.006,0.154,5.988,0.456,8.944c-6.63,3.761-11.462,10.561-12.333,18.832   c-1.748,16.604-1.748,33.346,0,49.949c1.144,10.865,9.122,19.192,19.033,21.422V231c0,2.762,2.238,5,5,5s5-2.238,5-5v-11.462   c0.232-0.045,0.463-0.084,0.696-0.136c0.161-0.036,0.322-0.072,0.483-0.108c12.107-2.706,20.335-14.039,19.029-26.375   c-1.401-13.237-1.401-26.586,0-39.823c1.306-12.336-6.922-23.669-19.029-26.375c-0.161-0.036-0.322-0.072-0.483-0.108   c-1.205-0.269-2.406-0.437-3.598-0.525c-0.153-1.932-0.254-3.874-0.254-5.831c0-40.252,32.748-73,73-73s73,32.748,73,73   c0,1.938-0.1,3.86-0.25,5.774c-1.58,0.038-3.181,0.222-4.79,0.582c-0.161,0.036-0.322,0.072-0.483,0.108   c-12.107,2.706-20.335,14.039-19.029,26.375c1.402,13.237,1.402,26.586,0,39.823c-1.306,12.336,6.923,23.669,19.029,26.375   c0.161,0.036,0.322,0.072,0.483,0.108c0.232,0.052,0.464,0.091,0.695,0.136V231c0,2.762,2.238,5,5,5s5-2.238,5-5v-11.596   c9.911-2.23,17.89-10.557,19.033-21.422C247.937,181.379,247.937,164.637,246.189,148.033z'
								/>
								<path
									fill='#2B2B2B'
									d='M246.189,148.033c-0.821-7.801-5.166-14.293-11.219-18.162c0.35-3.175,0.53-6.381,0.53-9.614   c0-47.972-39.028-87-87-87c-0.279,0-0.555,0.008-0.833,0.011v14.011c0.279-0.003,0.554-0.021,0.833-0.021c40.252,0,73,32.748,73,73   c0,1.938-0.1,3.86-0.25,5.774c-1.58,0.038-3.181,0.222-4.79,0.582c-0.161,0.036-0.322,0.072-0.483,0.108   c-12.107,2.706-20.335,14.039-19.029,26.375c1.402,13.237,1.402,26.586,0,39.823c-1.306,12.336,6.923,23.669,19.029,26.375   c0.161,0.036,0.322,0.072,0.483,0.108c0.232,0.052,0.464,0.091,0.695,0.136V231c0,2.762,2.238,5,5,5s5-2.238,5-5v-11.596   c9.911-2.23,17.89-10.557,19.033-21.422C247.937,181.379,247.937,164.637,246.189,148.033z'
								/>
							</g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
							<g></g>
						</svg>
						Besides programming You will catch me playing video games of various
						kind, sim racing, tuned into Formula 1 or Indycar races on the
						weekends, or just relaxing while listening to music.
					</p>
				</article>
			</div>
		</div>
	);
};

export default About;
