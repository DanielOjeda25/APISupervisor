import "./App.css";
import Home from "./components/Screens/Home";
import Gondolas from "./components/Screens/Gondolas";
import Comercial from './components/Screens/Comercial'
import Actualizacion from './components/Screens/Actualizacion'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/gondolas",
		element: <Gondolas />,
	},
	{
		path: "/comercial",
		element: <Comercial />
	},
	{
		path: "/actualizacion",
		element: <Actualizacion />
	}
]);

export default router;
