function App() {
	const [count, setCount] = React.useState(0);
	const [age, setAge] = React.useState(42);
	const [fruit, setFruit] = React.useState("banana");

	return (
		<div>
			<div>Hello, React Source Code!</div>
			<div>Number: {count}</div>
			<div>Age: {age}</div>
			<div>fruit: {fruit}</div>
			<button onClick={() => {
				setCount((v) => v + 1);
				setAge((v) => v + 1);
				setFruit((v) => v + 1);
			}}>Increment</button>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#app"));
