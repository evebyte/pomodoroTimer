import { useSelector, useDispatch } from "react-redux";
import { selectIsSession, selectTimeLeft } from "../features/timer/timerSlice";
import formatTime from "../utils/formatTime";

const TimerDisplay = () => {
	return (
		<div id="display" className="">
			<TimerLabel />
			<TimeLeft />
		</div>
	);
};

const TimerLabel = () => {
	const isSession = useSelector(selectIsSession);

	return (
		<div id="timer-label" className="m-1">
			{/* this string indicates the session type */}
			<span id="timer-label-text" className="text-2xl">
				{isSession ? "Session" : "Break"}
			</span>
		</div>
	);
};

const TimeLeft = () => {
	let timeLeft = useSelector(selectTimeLeft);
	const dispatch = useDispatch();

	return (
		<div id="time-left" className="m-2">
			<span id="time-left-text" className="text-8xl">
				{formatTime(timeLeft)}
			</span>

			{/* add beep that plays at 00:00 here */}
		</div>
	);
};

export default TimerDisplay;
