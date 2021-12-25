import ListItem from "./ListItem";

type Props = {
	list: Entry[];
};
type State = { date: Date };
type Entry = {
	text: string;
};
/**
 *
 * @param props {Props}
 * @returns
 */
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
}

export default List;
