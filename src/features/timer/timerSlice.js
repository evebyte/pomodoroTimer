import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	breakLength: 5,
	sessionLength: 25,
	isSession: true,
	timer: 1500,
	isRunning: false,
	isPaused: false,
	isReset: false,
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
		},
		sessionLengthDecrement: (state) => {
			state.sessionLength -= 1;
		},
	},
});

export const {
	breakLengthIncrement,
	breakLengthDecrement,
	sessionLengthIncrement,
	sessionLengthDecrement,
} = timerSlice.actions;

export default timerSlice.reducer;
