import { Component, ReactNode } from "react";
import ListItem from "./ListItem";

/* type Props = {
	list: Entry[];
	handleItemChange: Function;
};
type State = { date: Date };
type Entry = {
	text: string;
};

function List(props: Props) {
	return (
		<div>
			<p>Hello List</p>
			<ul>
				{props.list.map((entry: Entry, index: number) => {
					return (
						<ListItem
							key={`list-${index}`}
							value={entry.text}
							index={index}
						></ListItem>
					);
				})}
			</ul>
		</div>
	);
} */

type Props = {
	list: Entry[];
	handleItemChange: Function;
};
type State = { list: Entry[] };
type Entry = {
	text: string;
	checked: boolean;
};
class List extends Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			list: this.props.list.map((entry) => ({
				text: entry.text,
				checked: entry.checked,
			})),
		};
	}

	onItemChange(entry: Entry) {
		const { list } = this.state;
		this.setState({
			list: list.map((prevEntry: Entry) => ({
				text: prevEntry.text,
				checked:
					prevEntry.text === entry.text
						? !prevEntry.checked
						: prevEntry.checked,
			})),
		});
		this.props.handleItemChange(entry);
	}

	render(): ReactNode {
		return (
			<div>
				<p>Hello List</p>
				<ul>
					{this.state.list.map((entry: Entry, index: number) => {
						return (
							<ListItem
								key={`list-${index}`}
								value={entry.text}
								index={index}
								checked={entry.checked}
								onChange={this.onItemChange.bind(this, entry)}
							></ListItem>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default List;
