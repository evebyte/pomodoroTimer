import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// store our timer
var timerId;
// var beep = document.getElementById("beep");

export const startTimer = createAsyncThunk(
	"timer/startTimer",
	async (testing, thunkAPI) => {
		try {
			const state = thunkAPI.getState();

			timerId = setTimeout(() => {
				setTimeout(() => {
					thunkAPI.dispatch(continueTimer());
				}, 1000).then(document.getElementById("beep").play());
			}, state.timer.timeLeft * 1000);
		} catch (error) {
			clearTimeout(timerId);
		}
	}
);

export const continueTimer = createAsyncThunk(
	"timer/continueTimer",
	async (testing, thunkAPI) => {
		try {
			const state = thunkAPI.getState();

			timerId = setTimeout(() => {
				// audio.play();

				setTimeout(() => {
					thunkAPI.dispatch(continueTimer());
				}, 1000).then(document.getElementById("beep").play());
			}, state.timer.timeLeft * 1000);
		} catch (error) {
			clearTimeout(timerId);
		}
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
};

export const timerSlice = createSlice({
	name: "timer",
	initialState,
	reducers: {
		adjustBreak: (state, action) => {
			state.break = action.payload;

			// if the timer is not running and the session is a break, update the timeLeft
			if (!state.isRunning && !state.isSession) {
				state.timeLeft = action.payload * 60;
			}
		},
		adjustSession: (state, action) => {
			state.session = action.payload;

			// if the timer is not running and the session is a session, update the timeLeft
			if (!state.isRunning && state.isSession) {
				state.timeLeft = state.session * 60;
			}
		},
		stopTimer: (state) => {
			state.isRunning = false;

			clearTimeout(timerId);

			// if timer was stopped before it expired, subtract the time elapsed from the timeLeft
			if (state.expireTime !== null) {
				const elapsedTime = Date.now() - state.currentTime;
				state.timeLeft = Math.floor(state.timeLeft - elapsedTime / 1000);

				state.currentTime = null;
				state.expireTime = null;
			}
		},
		resetTimer: (state) => {
			state.break = 5;
			state.session = 25;
			state.isSession = true;
			state.isRunning = false;
			state.timeLeft = 1500;
			state.currentTime = null;
			state.expireTime = null;

			clearTimeout(timerId);

			document.getElementById("beep").pause();
			document.getElementById("beep").currentTime = 0;
		},
	},
	extraReducers: {
		[startTimer.pending]: (state) => {},
		[startTimer.fulfilled]: (state, action) => {
			state.isRunning = true;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;
		},
		[startTimer.rejected]: (state, action) => {
			state.currentTime = null;
			state.expireTime = null;
		},

		[continueTimer.pending]: (state) => {
			state.isRunning = false;
			state.currentTime = null;
			state.expireTime = null;
		},
		[continueTimer.fulfilled]: (state, action) => {
			state.isRunning = true;
			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;

			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;
		},
		[continueTimer.rejected]: (state, action) => {
			state.currentTime = null;
			state.expireTime = null;
		},
	},
});

export const { adjustBreak, adjustSession, stopTimer, resetTimer } =
	timerSlice.actions;

export const selectBreak = (state) => state.timer.break;
export const selectSession = (state) => state.timer.session;
export const selectIsSession = (state) => state.timer.isSession;
export const selectIsRunning = (state) => state.timer.isRunning;
export const selectTimeLeft = (state) => state.timer.timeLeft;
export const selectCurrentTime = (state) => state.timer.currentTime;
export const selectExpireTime = (state) => state.timer.expireTime;

export default timerSlice.reducer;
