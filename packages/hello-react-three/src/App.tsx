import React, { Component, createRef } from 'react';
import './App.css';
import * as THREE from "three";

type Props = {};

type State = {};

class App extends Component<Props, State> {
	private requestID: any;
	divRef = createRef<HTMLDivElement>();

	componentDidMount() {
		// === THREE.JS CODE START ===
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		if (this.divRef.current) {
			this.divRef.current.appendChild(renderer.domElement);
		}
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);
		camera.position.z = 5;
		const animate = () => {
			this.requestID = requestAnimationFrame(animate);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
		};
		animate();
		// === THREE.JS EXAMPLE CODE END ===
	}

	componentDidUpdate() {}

	componentWillUnmount() {
		cancelAnimationFrame(this.requestID);
	}

	render(): React.ReactNode {
		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hello React Three
					</a>
					<div ref={this.divRef} />
				</header>
			</div>
		);
	}
}

export default App;
