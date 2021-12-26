import { Component ,createRef, ReactNode} from "react";
import * as d3 from 'd3';

type Props = {
	data:number[],
	size:number[],
};

type State = { date: Date };

/**
 * D3Chart Component , 
 */
class D3Chart extends Component<Props, State> {
	private timerID: any;
	myRef: any;
	node: any;
	constructor(props:Props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }

   componentDidMount() {
      this.createBarChart()
   }
   
   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
      const node = this.node
      const dataMax = d3.max(this.props.data) || 100;
      const yScale = d3.scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]]);

   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   d3.select(node)
		.selectAll("rect")
		.data(this.props.data)
		.style("fill", "#fe9922")
		.attr("x", (d, i) => i * 25)
		.attr("y", (d) => {
			return this.props.size[1] - yScale(d);
		})
		.attr("height", (d) => yScale(d))
		.attr("width", 25);
   }
   
render() {
      return (
			<svg
				ref={(node) => (this.node = node)}
				width={500}
				height={500}
			></svg>
		);
   }
}
export default D3Chart;