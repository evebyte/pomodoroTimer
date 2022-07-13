import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	break: 5,
	session: 25,
	isSession: true,
	isRunning: false,
	timeLeft: 1500,
	deltaTime: 0,
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
		toggleSesssion: (state) => {
			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
		},
		// todo: need a way to update the timeLeft, maybe asyncThunk?
		updateTimeLeft: (state, action) => {
			state.timeLeft = action.payload;
		},
		// todo: handle timer logic
		timerComplete: (state, action) => {
			state.isRunning = true;
			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
		},
		toggleTimer: (state, action) => {
			state.isRunning = action.payload;
		},
		resetTimer: (state) => {
			state.break = 5;
			state.session = 25;
			state.isSession = true;
			state.isRunning = false;
			state.timeLeft = 1500;
			state.timeElapsed = 0;
			state.timerId = null;
		},
	},
});

export const {
	adjustBreak,
	adjustSession,
	updateTimeLeft,
	timerComplete,
	toggleTimer,
	resetTimer,
} = timerSlice.actions;

export const selectBreak = (state) => state.timer.break;
export const selectSession = (state) => state.timer.session;
export const selectIsSession = (state) => state.timer.isSession;
export const selectIsRunning = (state) => state.timer.isRunning;
export const selectTimeLeft = (state) => state.timer.timeLeft;
export const selectTimeElapsed = (state) => state.timer.timeElapsed;

export default timerSlice.reducer;
