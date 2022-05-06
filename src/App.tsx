import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useLocalStorage from 'use-local-storage';

const App = () => {
	const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useLocalStorage<'dark' | 'light'>(
		'theme',
		defaultDark ? 'dark' : 'light'
	);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<div id='app' className='app' data-theme={theme}>
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
