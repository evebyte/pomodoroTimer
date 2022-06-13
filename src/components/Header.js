import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
	return (
		<header className="flex flex-row justify-center">
			<Title />
			<ToggleDarkMode />
		</header>
	);
};

const Title = () => {
	return (
		<div className="text-center p-3">
			<h1 className="text-3xl font-bold">Pomodoro Timer</h1>
		</div>
	);
};

const ToggleDarkMode = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<button
			title="toggle dark mode"
			className="text-xl 
				hover:text-amber-400 
				dark:hover:text-amber-400
				border-2 
				border-green-900 	
				hover:bg-green-900
				dark:border-green-300 dark:hover:bg-green-300 
				rounded-full  p-2 m-1
			"
			onClick={handleMode}
		>
			{darkTheme ? (
				<i class="fa-solid fa-sun"></i>
			) : (
				<i class="fa-solid fa-moon"></i>
			)}
		</button>
	);
};

export default Header;
