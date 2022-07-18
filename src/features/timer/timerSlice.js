import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// todo: would redux thunk allow me to dispatch an action when the timer is done?
// create the thunk for the start timer action
export const thunkStartTimer = createAsyncThunk(
	"timer/startTimer",
	async (timeLeft, { rejectWithValue }) => {
		// reject the thunk if the timeLeft is less than 0
		if (timeLeft < 0) {
			return rejectWithValue(timeLeft);
		}

		// start the timer
		return timeLeft;
	}
);

// create the thunk for the stop timer action
export const thunkStopTimer = createAsyncThunk(
	"timer/stopTimer",
	async (timeLeft, { rejectWithValue }) => {
		// reject the thunk if the timeLeft is less than 0
		if (timeLeft < 0) {
			return rejectWithValue(timeLeft);
		}

		// stop the timer
		return timeLeft;
	}
);

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
				// when the timer completes, do the following
				state.isSession = !state.isSession;
				console.log("timer complete");
			}, state.timeLeft * 1000);
		},
		stopTimer: (state) => {
			state.isRunning = false;
			clearTimeout(state.timerId); // not sure if this is necessary because we also set it to null
			state.timerId = null;

			// if timer was stopped before it expired, subtract the time elapsed from the timeLeft
			if (state.expireTime !== null) {
				const elapsedTime = Date.now() - state.currentTime;
				state.timeLeft = Math.floor(state.timeLeft - elapsedTime / 1000);
				state.currentTime = null;
				state.expireTime = null;
			}
		},
		completeTimer: (state) => {
			// todo: when the timer finishes, prepare the next session and play the audio beep
			// todo: find a way to call this reducer function upon expiration of the timer?

			console.log("timer complete");

			// state.isSession = !state.isSession;
			// state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
			// console.log(state.timeLeft + " seconds");
			// state.currentTime = Date.now();
			// state.expireTime = state.currentTime + state.timeLeft;

			// // start the timer next timer
			// state.timerId = setTimeout(() => {
			// 	// when the timer completes, do the following
			// 	state.isSession = !state.isSession;
			// 	state.timeLeft = state.isSession
			// 		? state.session * 60
			// 		: state.break * 60;
			// 	state.currentTime = Date.now();
			// 	state.expireTime = state.currentTime + state.timeLeft;
			// }, state.timeLeft * 1000);
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
			clearTimeout(state.timerId); // not sure if this is necessary because we also set it to null
		},
	},
});

export const {
	adjustBreak,
	adjustSession,
	startTimer,
	stopTimer,
	completeTimer,
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
