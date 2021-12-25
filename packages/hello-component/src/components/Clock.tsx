// function 方式创建组件
/* function Clock(props: any) {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {props.date.toLocaleTimeString()}.</h2>
		</div>
	);
}
export default Clock; */

import { Component, ReactNode } from "react";

/**
 * Class 方式创建组件
 * 通过以下五步将 Clock 的函数组件转成 class 组件：
 * 1.创建一个同名的 ES6 class，并且继承于 React.Component。
 * 2.添加一个空的 render() 方法。
 * 3.将函数体移动到 render() 方法之中。
 * 4.在 render() 方法中使用 this.props 替换 props。
 * 5.删除剩余的空函数声明。
 */

type Props = {};

type State = { date: Date };

class Clock extends Component<Props, State> {
	private timerID: any;
	constructor(props: {}) {
		super(props);
		this.state = { date: new Date() };
	}

	/**
	 * 组件创建成功的时候，自动启动定时器
	 */
	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		console.log("tick");
		this.setState({
			date: new Date(),
		});
	};

	render(): ReactNode {
		return (
			<div>
				<h1>Hello, Clock!</h1>
				{/* <h2>It is {this.props.date.toLocaleTimeString()}.</h2> */}
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock;
