import * as React from "react";
import { useEffect, useState, createRef } from "react";
import * as ReactDOM from "react-dom";

type EditorState = {
	loading?: boolean;
};
class App extends React.Component<{}, unknown> {
	myInput?: HTMLInputElement | null;
	buttonRef = createRef<any>();

	/**
	 *ComponentLifecycle
	 */
	constructor(props: Record<string, unknown>) {
		super(props);
		console.log("hello react: constructor");
		this.handleClick = this.handleClick.bind(this);
	}

	/**
	 *ComponentLifecycle
	 */
	componentDidMount() {
		console.log("hello react: componentDidMount");
		this.buttonRef.current.addEventListener("click", (e: unknown) => {
			console.log(e);
		});
	}

	/**
	 *ComponentLifecycle
	 */
	componentDidUpdate() {
		console.log("hello react: componentDidUpdate");
	}

	/**
	 *ComponentLifecycle
	 */
	componentDidCatch() {
		console.log("hello react: componentDidCatch");
	}

	/**
	 *ComponentLifecycle
	 */
	componentWillUnmount() {
		console.log("hello react: componentWillUnmount");
		this.buttonRef.current.removeEventListener("click");
	}

	private handleClick() {
		console.log("handleClick");
		if (this.myInput) {
			this.myInput.focus();
		}
	}

	/**
	 * @description {该方法把元素加载到container中，并且返回element的实例，即refs引用} ComponentLifecycle
	 *
	 * @returns
	 */
	public render() {
		return (
			<div className="app">
				<h1>Hello World!</h1>
				<p>Foo to the barz</p>
				<div>
					<input
						type="text"
						ref={(ref) => (this.myInput = ref)}
					></input>
					<br></br>
					<input
						type="button"
						value="Foucs the text input"
						onClick={this.handleClick}
					></input>
					<br></br>
					<button onClick={this.handleClick}>
						Button: Test React Event
					</button>
					<br></br>
					<button ref={this.buttonRef}>
						Button: Test Origin Event
					</button>
				</div>
			</div>
		);
	}
}

export default App;
