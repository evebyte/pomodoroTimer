import React from "react";

// react components
import Header from "./components/Header.js";
import Timer from "./components/Timer";
import BreakAndSessionControls from "./components/BreakAndSessionControls.js";
import Footer from "./components/Footer.js";

function App() {
	return (
		<main id="app" className="">
			<Header />
			<Timer />
			<BreakAndSessionControls />
			<Footer />
		</main>
	);
}

export default App;
