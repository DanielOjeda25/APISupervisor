import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";
function App() {
	<div>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
		</Switch>
	</div>;
}

export default App;
