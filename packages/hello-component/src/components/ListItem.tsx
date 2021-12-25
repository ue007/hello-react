type Props = {
	value: string;
	index: number;
};
type State = { date: Date };
/**
 *
 * @param props {Props}
 * @returns
 */
function ListItem(props: Props) {
	return (
		<li>
			<span>
				{`list item : index  = ${props.index}`} ,{" "}
				{`value = ${props.value}`}
			</span>
		</li>
	);
}

export default ListItem;
