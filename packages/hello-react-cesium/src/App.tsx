import React from "react";
import "./App.css";
import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";

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
					Hello React Cesium
				</a>
				<Viewer>
					<Entity
						name="Tokyo"
						position={Cartesian3.fromDegrees(
							139.767052,
							35.681167,
							100,
						)}
						point={{ pixelSize: 10, color: Color.WHITE }}
						description="hoge"
					/>
				</Viewer>
			</header>
		</div>
	);
}

export default App;
