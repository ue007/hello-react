import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hook from "./components/Hook";

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React Hook
				</a>
				<img src={logo} className="App-logo" alt="logo" />
				<Hook></Hook>
			</header>
		</div>
  );
}

export default App;
