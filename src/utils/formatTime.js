const formatTime = (timeLeft) => {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = Math.floor(timeLeft - minutes * 60);

	// time format = mm:ss
	return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default formatTime;
