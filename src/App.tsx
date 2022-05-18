import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useLocalStorage from 'use-local-storage';
import styles from './App.module.scss';

const App = () => {
	const defaultLight = window.matchMedia(
		'(prefers-color-scheme: light)'
	).matches;
	const [theme, setTheme] = useLocalStorage<'dark' | 'light'>(
		'theme',
		defaultLight ? 'light' : 'dark'
	);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<div id='app' className={styles.app} data-theme-mode={theme}>
			<Nav theme={theme} toggleTheme={toggleTheme} />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default App;
