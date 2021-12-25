import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<List
					list={[
						{
							text: "list-001",
						},
						{
							text: "list-002",
						},
						{
							text: "list-003",
						},
					]}
				/>
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
