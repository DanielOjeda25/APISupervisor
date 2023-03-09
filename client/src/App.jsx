import "./App.css";
import Home from "./components/Home";
import Gondolas from "./components/Gondolas";
import Comercial from './components/Comercial'
import Actualizacion from './components/Actualizacion'
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
		path: "/Actualizacion",
		element: <Actualizacion />
	}
]);

export default router;
