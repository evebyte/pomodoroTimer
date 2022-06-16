import { useSelector, useDispatch } from "react-redux";
import {
	breakLengthDecrement,
	breakLengthIncrement,
	selectBreakLength,
	selectSessionLength,
	selectIsRunning,
	sessionLengthDecrement,
	sessionLengthIncrement,
} from "../features/timer/timerSlice";

const BreakAndSessionControls = () => {
	return (
		<div
			id="break-and-session-controls"
			className="flex flex-row justify-center text-center"
		>
			<BreakControls />
			<SessionControls />
		</div>
	);
};

const BreakControls = () => {
	const breakLength = useSelector(selectBreakLength);
	const isRunning = useSelector(selectIsRunning);
	const dispatch = useDispatch();

	// the break length cannot be less than 0 or greater than 60
	const greaterThan0 = breakLength > 0;
	const lessThan60 = breakLength < 60;

	return (
		<div id="break-controls" className="m-3">
			<div id="break-label">
				<span id="break-label-text">Break Length</span>
			</div>

			<div id="break-length">
				<button
					id="break-decrement"
					className="border-2 
						border-green-900 
						hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					onClick={() =>
						dispatch(greaterThan0 && !isRunning && breakLengthDecrement())
					}
				>
					<i class="fa-solid fa-minus"></i>
				</button>

				<span id="break-length" className="">
					{breakLength}
				</span>

				<button
					id="break-increment"
					className="border-2 
						border-green-900 
						hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					onClick={() =>
						dispatch(lessThan60 && !isRunning && breakLengthIncrement())
					}
				>
					<i class="fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	);
};

const SessionControls = () => {
	const sessionLength = useSelector(selectSessionLength);
	const isRunning = useSelector(selectIsRunning);
	const dispatch = useDispatch();

	// the session length cannot be less than 0 or greater than 60
	const greaterThan0 = sessionLength > 0;
	const lessThan60 = sessionLength < 60;

	return (
		<div id="session-controls" className="m-3">
			<div id="session-label">
				<span id="session-label-text">Session Length</span>
			</div>

			<div id="session-length">
				<button
					id="session-decrement"
					className="border-2 
						border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					onClick={() =>
						dispatch(greaterThan0 && !isRunning && sessionLengthDecrement())
					}
				>
					<i class="fa-solid fa-minus"></i>
				</button>

				<span id="session-length">{sessionLength}</span>

				<button
					id="session-increment"
					className="border-2 
						border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					onClick={() =>
						dispatch(lessThan60 && !isRunning && sessionLengthIncrement())
					}
				>
					<i class="fa-solid fa-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default BreakAndSessionControls;
