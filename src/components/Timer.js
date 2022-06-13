const Timer = (props) => {
	return (
		<div id="timer" className="flex flex-col text-center m-3">
			<TimerLabel />
			<TimeLeft />
		</div>
	);
};

const TimerLabel = (props) => {
	return (
		<div id="timer-label">
			{/* this string indicates if the session is initialized */}
			<span id="timer-label-text" className="text-lg">
				Session
			</span>
		</div>
	);
};

const TimeLeft = (props) => {
	return (
		<div id="time-left">
			{/* time format = mm:ss */}
			<span id="time-left-text" className="text-6xl">
				25:00
			</span>
		</div>
	);
};

export default Timer;
