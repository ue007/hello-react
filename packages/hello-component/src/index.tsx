import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Clock from "./components/Clock";
import List from "./components/List";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// test clock component

/* function tick() {
	ReactDOM.render(
		// <Clock date={new Date()} />,
		<Clock />,
		document.getElementById("root"),
	);
}
setInterval(tick, 1000); */
