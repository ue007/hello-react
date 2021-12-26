import './App.css';
import Graphic from './components/Graphic';
import Chart from './components/Chart';
import D3Chart from './components/D3Chart';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<Graphic></Graphic>
				<Chart></Chart>
				<D3Chart
					data={[
						50, 100, 10, 30, 100, 200, 200, 100, 40,
						30, 33, 200, 50, 100, 100, 30, 10, 200, 
						20, 100, 40, 30, 33, 200,
					]}
					size={[200, 200]}
				></D3Chart>
			</header>
		</div>
  );
}

export default App;
