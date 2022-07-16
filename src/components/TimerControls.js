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
					<i className="fa-solid fa-pause"></i> pause
				</span>
			) : (
				<span>
					<i className="fa-solid fa-play"></i> play
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
			<i className="fa-solid fa-sync-alt"></i> reset
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
					<i class="fa-solid fa-sun"></i> light
				</span>
			) : (
				<span>
					<i class="fa-solid fa-moon"></i> dark
				</span>
			)}
		</button>
	);
};

export default TimerControls;
