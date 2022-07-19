import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk for start the timer and stop it
// start the timer and when the timer completes modify the state
export const startTimer = createAsyncThunk(
	"timer/startTimer",
	async (testing, thunkAPI) => {
		try {
			const state = thunkAPI.getState();

			// state.timer.currentTime = Date.now();
			// state.timer.expireTime = state.timer.currentTime + state.timer.timeLeft;

			// todo: connect the start timer and complete timer actions to create an infinite loop unless stopped.

			setTimeout(() => {
				thunkAPI.dispatch(completeTimer());
			}, state.timer.timeLeft * 1000);
		} catch (error) {
			clearTimeout();
		}
	}
);

// export const completeTimer = createAsyncThunk(
// 	"timer/completeTimer",
// 	async (testing, thunkAPI) => {
// 		try {
// 			const getState = thunkAPI.getState();

// 			const state = getState.timer;

// 			console.log("timer complete");

// 			state.isSession = !state.isSession;
// 			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
// 			state.currentTime = Date.now();
// 			state.expireTime = state.currentTime + state.timeLeft;
// 		} catch (error) {}
// 	}
// );

// thunk for the stop timer action)

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
		// todo: delete this if thunk works
		// startTimer: (state) => {
		// 	state.isRunning = true;
		// 	state.currentTime = Date.now();
		// 	state.expireTime = state.currentTime + state.timeLeft;

		// 	// start the timer
		// 	state.timerId = setTimeout(() => {
		// 		// todo: handle the timer expiration, what happens when the timer completes?
		// 		// when the timer completes, do the following
		// 		state.isSession = !state.isSession;
		// 		console.log("timer complete");
		// 	}, state.timeLeft * 1000);
		// },
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
			// todo: when the timer finishes, start the next session and play the audio beep
			console.log("timer complete");

			state.isSession = !state.isSession;
			state.timeLeft = state.isSession ? state.session * 60 : state.break * 60;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;

			// todo: start the timer next timer
			startTimer(state);

			// state.timerId = setTimeout(() => {
			// when the timer completes, do the following
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
	extraReducers: {
		[startTimer.pending]: (state) => {
			// console.log("pending...");
		},
		[startTimer.fulfilled]: (state, action) => {
			state.isRunning = true;
			state.currentTime = Date.now();
			state.expireTime = state.currentTime + state.timeLeft;

			// console.log("fulfilled!");

			// start the timer
			// state.timerId = setTimeout(() => {
			// 	console.log("timerId: ", state.timerId);
			// }, state.timeLeft * 1000);
		},
		[startTimer.rejected]: (state, action) => {
			// console.log("start timer rejected");
		},
	},
});

export const {
	adjustBreak,
	adjustSession,
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
