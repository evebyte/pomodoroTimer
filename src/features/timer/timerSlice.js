import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	isSession: true,
	isRunning: false,
	timeLeft: 1500,
	currentTime: Date.now(),
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
		completeTimer: (state, action) => {
			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;
		},
		startTimer: (state, action) => {
			state.isRunning = true;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;
			state.timerId = setTimeout(() => {
				completeTimer(state, action);
				console.log("timer complete");
			}, state.timeLeft * 1000);
		},
		stopTimer: (state, action) => {
			state.isRunning = false;
			clearTimeout(state.timerId);
		},
		resetTimer: (state) => {
			state.break = 5;
			state.session = 25;
			state.isSession = true;
			state.isRunning = false;
			state.timeLeft = 1500;
			state.currentTime = Date.now();
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

export default timerSlice.reducer;
