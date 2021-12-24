import * as React from "react";
import * as ReactDOM from "react-dom";

import { hot } from "react-hot-loader";

const reactLogo = require("./../assets/img/react_logo.svg");

import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, unknown> {
	myInput?: HTMLInputElement | null;
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
		// eslint-disable-next-line react/no-find-dom-node
		const dom = ReactDOM.findDOMNode(this);
		console.log(dom);
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
				<img src={reactLogo.default} height="480" />
				<div>
					<input
						type="text"
						ref={(ref) => (this.myInput = ref)}
					></input>
					<input
						type="button"
						value="Foucs the text input"
						onClick={this.handleClick}
					></input>
				</div>
			</div>
		);
	}

	private handleClick() {
		console.log("handleClick");
		if (this.myInput) {
			this.myInput.focus();
		}
	}
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
