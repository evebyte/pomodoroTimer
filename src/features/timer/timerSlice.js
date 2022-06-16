import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	breakLength: 5,
	sessionLength: 25,
	isSession: true,
	isRunning: false,
	timeLeft: 1500,
	reset: false,
};

export const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		breakLengthIncrement: (state) => {
			state.breakLength += 1;
		},
		breakLengthDecrement: (state) => {
			state.breakLength -= 1;
		},
		sessionLengthIncrement: (state) => {
			state.sessionLength += 1;
			state.timeLeft = state.sessionLength * 60;
		},
		sessionLengthDecrement: (state) => {
			state.sessionLength -= 1;
			state.timeLeft = state.sessionLength * 60;
		},
		// handles play/pause icon toggle, needs to connect to timer logic
		startTimer: (state) => {
			state.isRunning = true;
			// lock increment/decrement buttons
		},
		// handles play/pause icon toggle, needs to connect to timer logic
		stopTimer: (state) => {
			state.isRunning = false;
			// unlock increment/decrement buttons
		},
		// needs more work
		resetTimer: (state) => {
			state.breakLength = 5;
			state.sessionLength = 25;
			state.isRunning = false;
			state.timeLeft = 1500;
			state.reset = false;
		},
	},
});

export const {
	breakLengthIncrement,
	breakLengthDecrement,
	sessionLengthIncrement,
	sessionLengthDecrement,
	startTimer,
	stopTimer,
	resetTimer,
} = timerSlice.actions;

export const selectBreakLength = (state) => state.timer.breakLength;
export const selectSessionLength = (state) => state.timer.sessionLength;
export const selectIsSession = (state) => state.timer.isSession;
export const selectIsRunning = (state) => state.timer.isRunning;

export default timerSlice.reducer;
