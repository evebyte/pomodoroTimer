import { useSelector } from "react-redux";
// import actions from timerSlice
// import {} from "./features/timer/timerSlice";

const Timer = () => {
	return (
		<div id="timer" className="flex flex-col text-center m-3">
			<TimerLabel />
			<TimeLeft />
			<TimerControls />
		</div>
	);
};

const TimerLabel = () => {
	const isSession = useSelector((state) => state.isSession);

	return (
		<div id="timer-label">
			{/* this string indicates if the session type */}
			<span id="timer-label-text" className="text-lg">
				{isSession ? "Session" : "Break"}
			</span>
		</div>
	);
};

const TimeLeft = () => {
	return (
		<div id="time-left">
			{/* time format = mm:ss */}
			<span id="time-left-text" className="text-6xl">
				25:00
			</span>
		</div>
	);
};

const TimerControls = () => {
	return (
		<div id="controls" className="text-center">
			<StartStop />
			<Reset />
		</div>
	);
};

const StartStop = () => {
	const isRunning = useSelector((state) => state.isRunning);
	// const dispatch = useDispatch();

	return (
		<button
			id="start_stop"
			className="border-2 
				border-green-900 	
				hover:bg-green-900
				hover:text-green-300
				dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 
				rounded-full  p-2 m-1"
			// onClick={() => dispatch(isRunning ? stopTimer() : startTimer())}
		>
			{/* display pause or play  */}
			{isRunning ? (
				<i className="fa-solid fa-pause"></i>
			) : (
				<i className="fa-solid fa-play"></i>
			)}
		</button>
	);
};

const Reset = () => {
	// const dispatch = useDispatch();

	return (
		<button
			id="reset"
			className="border-2 
				border-green-900 
				hover:bg-green-900
				hover:text-green-300
				dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-2 m-1"
			// onClick={() => dispatch(resetTimer())}
		>
			<i className="fa-solid fa-sync-alt"></i>
		</button>
	);
};

export default Timer;
