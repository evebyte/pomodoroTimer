// for Dark Mode Toggle
import useDarkMode from "../hooks/useDarkMode";

// react-redux
import { useSelector, useDispatch } from "react-redux";
import {
	selectIsRunning,
	startTimer,
	stopTimer,
	resetTimer,
} from "../features/timer/timerSlice";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faSyncAlt,
	faSun,
	faMoon,
} from "@fortawesome/free-solid-svg-icons";

const TimerControls = () => {
	return (
		<div id="controls" className="text-center m-2">
			<StartStop />
			<Reset />
			<ToggleDarkMode />
		</div>
	);
};

const StartStop = () => {
	const isRunning = useSelector(selectIsRunning);
	const dispatch = useDispatch();

	return (
		<button
			id="start_stop"
			title="Start/Stop Timer"
			className="
				bg-green-900 dark:bg-green-900
				hover:bg-orange-600 dark:hover:bg-orange-700
				text-green-300 dark:text-green-300
				hover:text-orange-200 dark:hover:text-orange-300 
				rounded-full  p-3 m-1 font-bold hover:scale-110 active:scale-90"
			onClick={() => dispatch(isRunning ? stopTimer() : startTimer())}
		>
			{isRunning ? (
				<span>
					<FontAwesomeIcon icon={faPause} /> pause
				</span>
			) : (
				<span>
					<FontAwesomeIcon icon={faPlay} /> play
				</span>
			)}
		</button>
	);
};

const Reset = () => {
	const dispatch = useDispatch();

	return (
		<button
			id="reset"
			title="Reset Timer"
			className="bg-green-900 dark:bg-green-900
				hover:bg-orange-600 dark:hover:bg-orange-700
				text-green-300 dark:text-green-300
				hover:text-orange-200 dark:hover:text-orange-300  
				rounded-full  p-3 m-1 font-bold hover:scale-110 active:scale-90"
			onClick={() => dispatch(resetTimer())}
		>
			<FontAwesomeIcon icon={faSyncAlt} /> reset
		</button>
	);
};

const ToggleDarkMode = () => {
	const [darkTheme, setDarkTheme] = useDarkMode();
	const handleMode = () => setDarkTheme(!darkTheme);

	return (
		<button
			title="Toggle Light/Dark Mode"
			className="
				bg-green-900 dark:bg-green-900 
                hover:bg-orange-600 dark:hover:bg-orange-700
				text-green-300 dark:text-green-300
                hover:text-orange-200 dark:hover:text-orange-300 
				rounded-full p-3 m-1 font-bold hover:scale-110 active:scale-90"
			onClick={handleMode}
		>
			{darkTheme ? (
				<span>
					<FontAwesomeIcon icon={faSun} /> light
				</span>
			) : (
				<span>
					<FontAwesomeIcon icon={faMoon} /> dark
				</span>
			)}
		</button>
	);
};

export default TimerControls;
