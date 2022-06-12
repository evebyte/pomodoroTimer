const Timer = (props) => {
	return (
		<div id="timer" className="flex flex-col text-center m-3">
			<div id="timer-label">
				{/* this string indicates if the session is initialized */}
				<span id="timer-label-text" className="text-lg">
					Session
				</span>
			</div>

			<div id="time-left">
				{/* time format = mm:ss */}
				<span id="time-left-text" className="text-6xl">
					25:00
				</span>
			</div>
		</div>
	);
};

export default Timer;
