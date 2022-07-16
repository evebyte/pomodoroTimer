import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	selectIsSession,
	selectIsRunning,
	selectTimeLeft,
} from "../features/timer/timerSlice";
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
	// let isSession = useSelector(selectIsSession);
	let isRunning = useSelector(selectIsRunning);

	const [countdown, setCountdown] = useState(timeLeft);

	useEffect(() => {
		// set the countdown to the timeLeft
		setCountdown(timeLeft);
	}, [timeLeft]);

	useEffect(() => {
		// if the timer is running, decrement the countdown every second
		if (isRunning) {
			const interval = setInterval(() => {
				setCountdown(countdown - 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [countdown, setCountdown, isRunning]);

	return (
		<div id="time-left" className="m-2">
			<span id="ticonstme-left-text" className="text-8xl">
				{formatTime(countdown)}
			</span>

			{/* audio beep that will play when the timer is at 00:00 */}
			{/* <audio id="beep" src="https://goo.gl/65cBl1" /> */}
		</div>
	);
};

export default TimerDisplay;
