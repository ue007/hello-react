import "./App.css";
import React, { Component, createRef } from "react";
import PixiComponent from "./components/PixiComponent";
import ThreeComponent from "./components/ThreeComponent";

class App extends Component<{}, {}> {
	state = { isMounted: true };
	render() {
		const { isMounted = true } = this.state;
		return (
			<div>
				<button
					onClick={() =>
						this.setState((state: any) => ({
							isMounted: !state.isMounted,
						}))
					}
				>
					{isMounted ? "Unmount" : "Mount"}
				</button>
				{isMounted && <PixiComponent />}
				{!isMounted && <ThreeComponent />}
			</div>
		);
	}
}
export default App;
