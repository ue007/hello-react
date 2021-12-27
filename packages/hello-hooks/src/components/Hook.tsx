import React, { useEffect, useState } from "react";

function Hook() {
	// 声明一个叫 “count” 的 state 变量。
	const [count, setCount] = useState(0);
	// 声明多个 state 变量！
	const [age, setAge] = useState(42);
	const [fruit, setFruit] = useState("banana");

	// 相当于 componentDidMount 和 componentDidUpdate:
	useEffect(() => {
		// 使用浏览器的 API 更新页面标题
		document.title = `You clicked ${count} times`;
	});
	
	return (
		<div>
			<div>Hello, React Source Code!</div>
			<div>Number: {count}</div>
			<div>Age: {age}</div>
			<div>fruit: {fruit}</div>
			<button
				onClick={() => {
					setCount((v) => v + 1);
					setAge((v) => v + 1);
					setFruit((v) => v + 1);
				}}
			>
				Increment
			</button>
		</div>
	);
}

export default Hook;
