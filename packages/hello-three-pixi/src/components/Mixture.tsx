import React, { Component, createRef } from "react";
import ReactDOM from "react-dom";
import * as PIXI from "pixi.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const style = {
	height: 800, // we can control scene size by setting container dimensions
};

type Props = {};

type State = {
	mix: string;
};

/**
 * Mixture Three and Pixi Component
 */
class Mixture extends Component<Props, State> {
	canvasRef = createRef<HTMLCanvasElement>();
	app?: PIXI.Application;
	scene?: THREE.Scene;
	camera?: THREE.PerspectiveCamera;
	renderer?: THREE.WebGLRenderer;
	cube?: THREE.Mesh<THREE.BoxGeometry, THREE.MeshPhongMaterial>;
	controls?: OrbitControls;
	requestID: any;

	constructor(props: Props) {
		super(props);
		this.state = {
			mix: "none",
		};
	}

	/**
	 * mount
	 */
	componentDidMount() {
		console.log("componentDidUpdate", this.state.mix);
		this._initContainer();
		this._animate();
	}

	/**
	 * unmount
	 */
	componentWillUnmount() {
		console.log("componentWillUnmount", this.state.mix);
		this.scene?.clear();
		this.renderer = undefined;
		this.scene = undefined;
		if (this.app) {
			this.app.destroy();
			this.app = undefined;
		}
		window.cancelAnimationFrame(this.requestID);
	}

	/**
	 * update
	 */
	componentDidUpdate() {
		console.log("componentDidUpdate", this.state.mix);
		this._initContainer();
	}

	/**
	 * init Container
	 */
	_initContainer() {
		if (this.state.mix === "three") {
			if (this.canvasRef.current && !this.renderer) {
				// init three
				const width = this.canvasRef.current.clientWidth;
				const height = this.canvasRef.current.clientHeight;

				this.scene = new THREE.Scene();
				this.camera = new THREE.PerspectiveCamera(
					75,
					width / height,
					0.1,
					1000,
				);
				this.camera.position.z = 9;
				this.controls = new OrbitControls(
					this.camera,
					this.canvasRef.current,
				);
				this.renderer = new THREE.WebGLRenderer({
					canvas: this.canvasRef.current,
				});
				this.renderer.setSize(width, height);
				this._initScene();
			}
		} else if (this.state.mix === "pixi") {
			if (this.canvasRef.current && !this.app) {
				// init pixi
				this.app = new PIXI.Application({
					width: this.canvasRef.current?.clientWidth,
					height: this.canvasRef.current?.clientHeight,
					backgroundColor: 0x1099bb,
					resolution: window.devicePixelRatio || 1,
					view: this.canvasRef.current,
				});
				this._initStage();
			}
		}
	}

	_initStage() {
		if (!this.app) {
			return;
		}
		const graphics = new PIXI.Graphics();

		// Rectangle
		graphics.beginFill(0xde3249);
		graphics.drawRect(50, 50, 100, 100);
		graphics.endFill();

		// Rectangle + line style 1
		graphics.lineStyle(2, 0xfeeb77, 1);
		graphics.beginFill(0x650a5a);
		graphics.drawRect(200, 50, 100, 100);
		graphics.endFill();

		// Rectangle + line style 2
		graphics.lineStyle(10, 0xffbd01, 1);
		graphics.beginFill(0xc34288);
		graphics.drawRect(350, 50, 100, 100);
		graphics.endFill();

		// Rectangle 2
		graphics.lineStyle(2, 0xffffff, 1);
		graphics.beginFill(0xaa4f08);
		graphics.drawRect(530, 50, 140, 100);
		graphics.endFill();

		// Circle
		graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
		graphics.beginFill(0xde3249, 1);
		graphics.drawCircle(100, 250, 50);
		graphics.endFill();

		// Circle + line style 1
		graphics.lineStyle(2, 0xfeeb77, 1);
		graphics.beginFill(0x650a5a, 1);
		graphics.drawCircle(250, 250, 50);
		graphics.endFill();

		// Circle + line style 2
		graphics.lineStyle(10, 0xffbd01, 1);
		graphics.beginFill(0xc34288, 1);
		graphics.drawCircle(400, 250, 50);
		graphics.endFill();

		// Ellipse + line style 2
		graphics.lineStyle(2, 0xffffff, 1);
		graphics.beginFill(0xaa4f08, 1);
		graphics.drawEllipse(600, 250, 80, 50);
		graphics.endFill();

		// draw a shape
		graphics.beginFill(0xff3300);
		graphics.lineStyle(4, 0xffd900, 1);
		graphics.moveTo(50, 350);
		graphics.lineTo(250, 350);
		graphics.lineTo(100, 400);
		graphics.lineTo(50, 350);
		graphics.closePath();
		graphics.endFill();

		// draw a rounded rectangle
		graphics.lineStyle(2, 0xff00ff, 1);
		graphics.beginFill(0x650a5a, 0.25);
		graphics.drawRoundedRect(50, 440, 100, 100, 16);
		graphics.endFill();

		// draw polygon
		const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

		graphics.lineStyle(0);
		graphics.beginFill(0x3500fa, 1);
		graphics.drawPolygon(path);
		graphics.endFill();

		this.app.stage.addChild(graphics);
	}

	_initScene() {
		if (!this.scene) return;
		const geometry = new THREE.BoxGeometry(2, 2, 2);
		const material = new THREE.MeshPhongMaterial({
			color: 0x156289,
			emissive: 0x072534,
			side: THREE.DoubleSide,
			flatShading: true,
		});
		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);

		const lights = [];
		lights[0] = new THREE.PointLight(0xffffff, 1, 0);
		lights[1] = new THREE.PointLight(0xffffff, 1, 0);
		lights[2] = new THREE.PointLight(0xffffff, 1, 0);

		lights[0].position.set(0, 200, 0);
		lights[1].position.set(100, 200, 100);
		lights[2].position.set(-100, -200, -100);

		this.scene.add(lights[0]);
		this.scene.add(lights[1]);
		this.scene.add(lights[2]);
	}

	/**
	 * renderer
	 */
	_animate = () => {
		if (this.state) console.log(this.state.mix);
		if (this.state.mix === "three") {
			if (this.scene && this.camera) {
				this.renderer?.render(this.scene, this.camera);
			}
		} else if (this.state.mix === "pixi") {
			this.app?.render();
		}
		this.requestID = window.requestAnimationFrame(this._animate);
	};

	render() {
		return <canvas style={style} ref={this.canvasRef} />;
	}
}

export default Mixture;
