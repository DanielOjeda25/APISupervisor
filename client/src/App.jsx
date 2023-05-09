import "./App.css";
import Home from "./components/Screens/Home";
import Gondolas from "./components/Screens/Gondolas";
import Comercial from './components/Screens/Comercial'
import Actualizacion from './components/Screens/Actualizacion'
import { createBrowserRouter } from "react-router-dom";

// Creación del objeto router usando la función createBrowserRouter de react-router-dom
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />, // Componente que se renderiza cuando se accede a la ruta "/"
	},
	{
		path: "/gondolas",
		element: <Gondolas />, // Componente que se renderiza cuando se accede a la ruta "/gondolas"
	},
	{
		path: "/comercial",
		element: <Comercial /> // Componente que se renderiza cuando se accede a la ruta "/comercial"
	},
	{
		path: "/actualizacion",
		element: <Actualizacion /> // Componente que se renderiza cuando se accede a la ruta "/actualizacion"
	}
]);

export default router;
