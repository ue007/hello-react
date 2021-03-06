import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Clock from './components/Clock';

class App extends Component {
	render(): React.ReactNode {
		const handleItemChange = (e: any) => {
			console.log(e);
		};
		return (
			<div className="App">
				<header className="App-header">
					<Clock />
					<List
						list={[
							{
								text: "list-001",
								checked: false,
							},
							{
								text: "list-002",
								checked: false,
							},
							{
								text: "list-003",
								checked: false,
							},
						]}
						handleItemChange={handleItemChange}
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
}

export default App;
