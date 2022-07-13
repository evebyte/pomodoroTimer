const Header = () => {
	return (
		<header className="flex flex-row justify-center">
			<Title />
		</header>
	);
};

const Title = () => {
	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold">Pomodoro Timer</h1>
		</div>
	);
};

export default Header;
