import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	selectIsSession,
	selectIsRunning,
	selectTimeLeft,
	selectTimerId,
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

	useEffect(() => {
		const timerLabel = isSession ? "Session" : "Break";

		document.getElementById("timer-label").innerHTML = timerLabel;
	}, [isSession]);

	// todo: make the label responsive to the changes of isSession

	return (
		<div id="timer-label" className="m-1 text-2xl">
			{/* this string indicates the session type */}
			{isSession ? "Session" : "Break"}
		</div>
	);
};

const TimeLeft = () => {
	const timeLeft = useSelector(selectTimeLeft);
	const isRunning = useSelector(selectIsRunning);
	const timerId = useSelector(selectTimerId);

	const [countdown, setCountdown] = useState(timeLeft);

	useEffect(() => {
		// set the countdown to the timeLeft
		setCountdown(timeLeft);

		if (timerId === null) {
			setCountdown(timeLeft);
		}
	}, [timeLeft, timerId]);

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
