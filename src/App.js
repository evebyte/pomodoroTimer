import React from "react";
// replace import counter from "./counter";
// with an import for a different component
import "./App.css";
import Header from "./components/Header.js";
import Timer from "./components/Timer.js";
import TimerControls from "./components/TimerControls.js";
import BreakAndSessionControls from "./components/BreakAndSessionControls.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<main id="app" className="">
			<Header />
			<Timer />
			<TimerControls />
			<BreakAndSessionControls />
			<Footer />
		</main>
	);
}

export default App;
