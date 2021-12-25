import { Component } from "react";

interface Props {
	name?: string;
}

/**
 * App Component Class
 */
class App extends Component<Props> {
	private inputValue: string = "";
	private textAreaValue: string = "";
	private radioValue: string = "male";
	private area: number = 0;

	/**
	 * constructor
	 * @param props
	 */
	// eslint-disable-next-line @typescript-eslint/no-useless-constructor
	constructor(props: Props) {
		super(props);
	}

	handleInputChange = (e: any) => {
		console.log(this);
		console.log(e.target.value);
		this.inputValue = e.target.value;
	};

	handleTextAreaChange = (e: any) => {
		console.log(this);
		console.log(e.target.value);
		// this.textAreaValue = e.target.value;
	};

	handelRadioChange = (e: any) => {
		console.log(e.target.value);
	};

	handleSelectChange = (e: any) => {
		console.log(e.target);
	};

	render() {
		const { name } = this.props;
		return (
			<div>
				<h1>Hello {name}</h1>
				<br></br>
				<p>
					{"单行输入款："}
					<input
						type="text"
						onChange={this.handleInputChange}
					></input>
				</p>
				<p>
					{"多行输入款："}
					<textarea onChange={this.handleTextAreaChange}></textarea>
				</p>
				<p>
					{"单选框"}
					<input
						type="radio"
						value="male"
						checked={this.radioValue === "male"}
						onChange={this.handelRadioChange}
					></input>
				</p>
				<p>
					{"Select"}
					<select
						value={this.area}
						onChange={this.handleSelectChange}
					>
						<option value="beijing">北京</option>
						<option value="shanghai">上海</option>
						<option value="guangzhou">广州</option>
						<option value="shenzhen">深圳</option>
					</select>
				</p>
			</div>
		);
	}
}

export default App;
