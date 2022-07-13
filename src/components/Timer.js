import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
	return (
		<div id="timer" className="flex flex-col text-center m-2">
			<TimerDisplay />
			<TimerControls />
		</div>
	);
};

export default Timer;
