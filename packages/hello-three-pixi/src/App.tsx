import "./App.css";
import React, { Component, createRef } from "react";
import PixiComponent from "./components/PixiComponent";
import ThreeComponent from "./components/ThreeComponent";
import Mixture from "./components/Mixture";

type Props = {};

type State = {
	mode: string; // pixi
	mix: string; // pixi
};
class App extends Component<Props, State> {
	mixtureRef = createRef<Mixture>();
	state: State = {
		mode: "three", // pixi
		mix: "three", // pixi
	};

	render() {
		const { mode } = this.state;
		return (
			<div>
				<button
					onClick={() =>
						this.setState((state: State) => ({
							mode: "three",
						}))
					}
				>
					three
				</button>
				<button
					onClick={() =>
						this.setState((state: State) => ({
							mode: "pixi",
						}))
					}
				>
					pixi
				</button>
				<button
					onClick={() => {
						this.setState({
							mode: "mixture",
						});
						if (this.mixtureRef) {
							this.mixtureRef.current?.setState({
								mix: "three",
							});
						}
					}}
				>
					{"mixture-three"}
				</button>
				<button
					onClick={() => {
						this.setState({
							mode: "mixture",
						});
						if (this.mixtureRef) {
							this.mixtureRef.current?.setState({
								mix: "pixi",
							});
						}
					}}
				>
					{"mixture-pixi"}
				</button>

				{mode === "pixi" && <PixiComponent />}
				{mode === "three" && <ThreeComponent />}
				{mode === "mixture" && <Mixture ref={this.mixtureRef} />}
			</div>
		);
	}
}
export default App;
