import { useSelector, useDispatch } from "react-redux";
import {
	adjustBreak,
	adjustSession,
	selectBreak,
	selectSession,
	selectIsRunning,
} from "../features/timer/timerSlice";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const BreakAndSessionControls = () => {
	return (
		<div
			id="break-and-session-controls"
			className="flex flex-row justify-center text-center m-2"
		>
			<BreakControls />
			<SessionControls />
		</div>
	);
};

const BreakControls = () => {
	const breakLength = useSelector(selectBreak);
	const isRunning = useSelector(selectIsRunning);
	const dispatch = useDispatch();

	// the breakLength cannot be less than 0 or greater than 60
	const greaterThan1 = breakLength > 1;
	const lessThan60 = breakLength < 60;

	return (
		<div
			id="break-controls"
			className="m-1 p-3 rounded-lg bg-[#79db9d] dark:bg-[#07140c]"
		>
			<div id="break-label" className="m-1">
				<span id="break-label-text">Break</span>
			</div>

			<div id="break-length">
				<button
					id="break-decrement"
					title="-1 Break Length"
					className="bg-green-900 dark:bg-green-900
						hover:bg-orange-600 dark:hover:bg-orange-700
						text-green-300 dark:text-green-300
						hover:text-orange-200 dark:hover:text-orange-300  
						rounded-lg  p-2 m-1 hover:scale-110 active:scale-90"
					onClick={() =>
						dispatch(greaterThan1 && !isRunning && adjustBreak(breakLength - 1))
					}
				>
					<FontAwesomeIcon icon={faMinus} />
				</button>

				<span id="break-length" className="text-lg m-1">
					{breakLength}
				</span>

				<button
					id="break-increment"
					title="+1 Break Length"
					className="bg-green-900 dark:bg-green-900
						hover:bg-orange-600 dark:hover:bg-orange-700
						text-green-300 dark:text-green-300
						hover:text-orange-200 dark:hover:text-orange-300  
						rounded-lg  p-2 m-1 hover:scale-110 active:scale-90"
					onClick={() =>
						dispatch(lessThan60 && !isRunning && adjustBreak(breakLength + 1))
					}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	);
};

const SessionControls = () => {
	const sessionLength = useSelector(selectSession);
	const isRunning = useSelector(selectIsRunning);
	const dispatch = useDispatch();

	// the session length cannot be less than 0 or greater than 60
	const greaterThan1 = sessionLength > 1;
	const lessThan60 = sessionLength < 60;

	return (
		<div
			id="session-controls"
			className="m-1 p-3 rounded-lg bg-[#79db9d] dark:bg-[#07140c]"
		>
			<div id="session-label" className="m-1">
				<span id="session-label-text">Session</span>
			</div>

			<div id="session-length">
				<button
					id="session-decrement"
					value={-1}
					title="-1 Session Length"
					className="bg-green-900 dark:bg-green-900
						hover:bg-orange-600 dark:hover:bg-orange-700
						text-green-300 dark:text-green-300
						hover:text-orange-200 dark:hover:text-orange-300  
						rounded-lg  p-2 m-1 hover:scale-110 active:scale-90"
					onClick={() =>
						dispatch(
							greaterThan1 && !isRunning && adjustSession(sessionLength - 1)
						)
					}
				>
					<FontAwesomeIcon icon={faMinus} />
				</button>

				<span id="session-length" className="text-lg m-1">
					{sessionLength}
				</span>

				<button
					id="session-increment"
					title="+1 Session Length"
					className="bg-green-900 dark:bg-green-900
						hover:bg-orange-600 dark:hover:bg-orange-700
						text-green-300 dark:text-green-300
						hover:text-orange-200 dark:hover:text-orange-300  
						rounded-lg  p-2 m-1 hover:scale-110 active:scale-90"
					onClick={() =>
						dispatch(
							lessThan60 && !isRunning && adjustSession(sessionLength + 1)
						)
					}
				>
					<FontAwesomeIcon icon={faPlus} />
				</button>
			</div>
		</div>
	);
};

export default BreakAndSessionControls;
