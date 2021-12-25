import { Component, ReactNode } from "react";

/**
 *
 * @param props {Props}
 * @returns
 */
/*
type Props = {
	value: string;
	index: number;
};
type State = { date: Date }; 
function ListItem(props: Props) {
	return (
		<li>
			<span>
				{`list item : index  = ${props.index}`} ,{" "}
				{`value = ${props.value}`}
			</span>
		</li>
	);
} */

type Props = {
	value?: string;
	index?: number;
	text?: string;
	checked?: boolean;
	onChange: any;
};
type State = { date: Date };

/**
 *
 */
class ListItem extends Component<Props, State> {
	static defaultProps = {
		text: "",
		checked: false,
	};
	constructor(props: Props) {
		super(props);
	}

	render(): ReactNode {
		return (
			<li>
				<input
					type="checkbox"
					checked={this.props.checked}
					onChange={this.props.onChange}
				></input>
				<span>{this.props.value}</span>
			</li>
		);
	}
}

export default ListItem;
