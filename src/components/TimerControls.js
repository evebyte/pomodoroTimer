const TimerControls = () => {
	return (
		<div id="controls" className="text-center">
			<StartStop />
			<Reset />
		</div>
	);
};

const StartStop = () => {
	return (
		<button
			id="start_stop"
			className="border-2 
				border-green-900 	
				hover:bg-green-900
				hover:text-green-300
				dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 
				rounded-full  p-2 m-1"
		>
			{/* todo: maybe add state toggle for play/pause display */}
			<i className="fa-solid fa-play"></i>
			<span> </span>
			<i className="fa-solid fa-pause"></i>
		</button>
	);
};

const Reset = () => {
	return (
		<button
			id="reset"
			className="border-2 
				border-green-900 
				hover:bg-green-900
				hover:text-green-300
				dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-2 m-1"
		>
			<i className="fa-solid fa-sync-alt"></i>
		</button>
	);
};

export default TimerControls;
