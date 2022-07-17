import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	isSession: true,
	isRunning: false,
	timeLeft: 1500,
	currentTime: null,
	expireTime: null,
	timerId: null,
};

export const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		adjustBreak: (state, action) => {
			state.break = action.payload;
		},
		adjustSession: (state, action) => {
			state.session = action.payload;
			state.timeLeft = state.session * 60;
		},
		startTimer: (state) => {
			state.isRunning = true;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;

			// start the timer
			state.timerId = setTimeout(() => {
				// todo: handle the timer expiration, what happens when the timer completes?
				console.log("hello");
				state.currentTime = Date.now();
				// when the timer completes, do the following
			}, state.timeLeft * 1000);
		},
		stopTimer: (state) => {
			state.isRunning = false;
			clearTimeout(state.timerId);

			// if timer was stopped before it expired, update the timeLeft to the remaining time
			if (state.expireTime !== null) {
				const elapsedTime = Date.now() - state.currentTime;
				state.timeLeft = Math.floor(state.timeLeft - elapsedTime / 1000);
				state.expireTime = null;
			}
		},
		completeTimer: (state) => {
			// todo: when the timer finishes, prepare the next session and play the audio beep
			// todo: find a way to call this reducer function upon expiration of the timer?

			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
			console.log(state.timeLeft + " seconds");
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;

			// start the timer next timer
			state.timerId = setTimeout(() => {
				// when the timer completes, do the following
				state.isSession = !state.isSession;
				state.timeLeft = state.isSession
					? state.session * 60
					: state.break * 60;
				state.currentTime = Date.now();
				state.expireTime = state.currentTime + state.timeLeft;
			}, state.timeLeft * 1000);
		},
		resetTimer: (state) => {
			state.break = 5;
			state.session = 25;
			state.isSession = true;
			state.isRunning = false;
			state.timeLeft = 1500;
			state.currentTime = null;
			state.expireTime = null;
			state.timerId = null;
		},
	},
});

export const {
	adjustBreak,
	adjustSession,
	completeTimer,
	startTimer,
	stopTimer,
	resetTimer,
} = timerSlice.actions;

export const selectBreak = (state) => state.timer.break;
export const selectSession = (state) => state.timer.session;
export const selectIsSession = (state) => state.timer.isSession;
export const selectIsRunning = (state) => state.timer.isRunning;
export const selectTimeLeft = (state) => state.timer.timeLeft;
export const selectCurrentTime = (state) => state.timer.currentTime;
export const selectExpireTime = (state) => state.timer.expireTime;
export const selectTimerId = (state) => state.timer.timerId;

export default timerSlice.reducer;
