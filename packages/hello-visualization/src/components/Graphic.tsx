import { Component, ReactNode ,createRef} from "react";

type Props = {};

type State = { date: Date };

/**
 * Graphic Component
 */
class Graphic extends Component<Props, State> {
	private timerID: any;
	myCanvas: any;
	rotate:number = 0;
	constructor(props: {}) {
		super(props);
		this.state = { date: new Date() };
		this.myCanvas = createRef();
	}

	/**
	 * 挂载
	 */
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 10);
	}

	/**
	 * 更新
	 */
	componentDidUpdate() {
		console.log('update');
		this.draw();
	}

	/**
	 * draw
	 */
	draw() {
		const canvas = this.myCanvas.current;
		if(canvas && canvas instanceof HTMLCanvasElement){
			const ctx = canvas.getContext('2d');
			if(ctx){
				ctx?.clearRect(0,0,200,200);
				ctx.save(); 
				ctx.translate(100, 100); 
				ctx.rotate(this.rotate++); 
				ctx.fillStyle = 'red';
				ctx.fillRect( -50, -50, 100, 100); 
				ctx.restore();
			}
		}
	}

	/**
	 * 卸载
	 */
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			date: new Date(),
		});
	};

	render(): ReactNode {
		return (
			<div>
				<h1>Hello, Clock!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				<canvas ref={this.myCanvas} width={600} height={600}></canvas>
			</div>
		);
	}
}

export default Graphic;
