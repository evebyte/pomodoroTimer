const BreakAndSessionControls = () => {
	return (
		<div
			id="break-and-session-controls"
			className="flex flex-row justify-center text-center"
		>
			{/* break controls */}
			<div id="break-controls" className="m-3">
				<div id="break-label">
					<span id="break-label-text">Break Length</span>
				</div>

				<div id="break-length">
					<button
						id="break-decrement"
						className="border-2 border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					>
						<i class="fa-solid fa-minus"></i>
					</button>

					<span id="break-length">5</span>

					<button
						id="break-increment"
						className="border-2 border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					>
						<i class="fa-solid fa-plus"></i>
					</button>
				</div>
			</div>

			{/* session controls */}
			<div id="session-controls" className="m-3">
				<div id="session-label">
					<span id="session-label-text">Session Length</span>
				</div>

				<div id="session-length">
					<button
						id="session-decrement"
						className="border-2 border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					>
						<i class="fa-solid fa-minus"></i>
					</button>

					<span id="session-length">25</span>

					<button
						id="session-increment"
						className="border-2 border-green-900 hover:bg-green-900
						hover:text-green-300
						dark:border-green-300 dark:hover:bg-green-300 dark:hover:text-green-900 rounded-full  p-1 m-1"
					>
						<i class="fa-solid fa-plus"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default BreakAndSessionControls;
