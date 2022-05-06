import { useEffect, useState } from 'react';

interface Props {
	theme: 'dark' | 'light';
	toggleTheme: () => void;
}

const Nav: React.FC<Props> = ({ theme, toggleTheme }) => {
	const [bigNav, setBigNav] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const dropMenu = () => {
		setOpenMenu((prevState) => !prevState);
	};

	useEffect(() => {
		const container = document.getElementById('app') as HTMLElement;
		if (container.offsetWidth <= 768) {
			setBigNav(false);
		} else {
			setBigNav(true);
			setOpenMenu(false);
		}
	}, []);

	useEffect(() => {
		const container = document.getElementById('app') as HTMLElement;
		const watchForResize = () => {
			if (container.offsetWidth <= 768) {
				setBigNav(false);
			} else {
				setBigNav(true);
				setOpenMenu(false);
			}
		};

		window.addEventListener('resize', watchForResize);

		return () => window.removeEventListener('resize', watchForResize);
	}, [setBigNav, setOpenMenu]);

	return (
		<nav
			id='nav'
			className={`nav ${bigNav ? 'big_nav' : ''} ${
				openMenu ? 'open_menu' : ''
			}`}
		>
			<ul>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#skills'>Skills</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
				<li>
					<div className='mode' onClick={() => toggleTheme()}>
						Mode
						<div className={`mode_slider ${theme}`}>
							<div className={`mode_slider_circle ${theme}`}></div>
						</div>
					</div>
				</li>
				<li>
					<div className='ham_menu' onClick={() => dropMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
