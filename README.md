# APISupervisor

Podes hacer un fork del proyecto para trabajar. El proyecto usa nodejs v16.19.1, se conecta a una base de datos mysql que esta alojada en hostinger.

El proyecto esta divido en 2 partes , la parte de "Frontend" hecho en reactjs y creado con el empaquetador VITEJS ,  que esta constituida en la carpeta **Client**. La estructura es esta:

```text
/client
├── src/
│   ├── assets/              # Imágenes, iconos y otros archivos multimedia
│   ├── components/          # Componentes de React reutilizables
│   ├── firebase/            # Configuración y utilidades de Firebase
│   ├── utils/               # Funciones de utilidad de JavaScript
│   ├── App.jsx              # Componente principal de la aplicación
│   ├── index.css            # Hojas de estilo globales
│   ├── main.jsx             # Archivo de entrada principal de la aplicación
│   └── App.css              # Hojas de estilo del componente principal
├── public/                  # Archivos públicos como index.html, favicon.ico, etc.
├── node_modules/            # Dependencias de Node.js instaladas por npm
├── package.json             # Archivo de configuración de npm con las dependencias y los scripts
```

Procedo a explicarte en _components_ encontraras todos los componentes que se han utilizado, que son pocos, estan estilizados con la libreria de _Tailwind-css_
y se han usado componentes de terceros como *react-select* para seleccionar las opciones que vienen de la base de datos.

En la carpeta Firebase, solo esta la conexion a firebase para la transferencia de informacion de la foto al panel de bamana(tablero bamana).
Esa parte funciona perfectamente no te molestes en modificar nada.

Usa un enrutador que es _react-router-dom_ para crear el enrutamiento.

Para enviar las solicitudes HTTP a la API usa la libreria de _Axios_ , veras que en el **componente/screens/Gondolas** se hace una unica solicitud a la Api 
se esta ejecutando en local, cuando el backend que esta fuera de la carpeta **Client** este alojado en un servidor reemplaza la direccion ""http://10.211.55.6:8080/idClientes"" 
por la de ese servidor para hacer peticiones y funcionara.

```jsx
const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios("http://10.211.55.6:8080/idClientes");
			setData(response.data);
		} catch (error) {
			console.error(error);
			alert("Ha ocurrido un error al cargar los clientes.");
		} finally {
			setIsLoading(false);
		}
	};
```

El componente _"Actualizacion.jsx"_ no se usa, asi que podes ignorarlo o eliminarlo.

El componente _"Comercial"_ redirecciona a la pagina "tablero.bamana" que es donde los supervisores van a revisar datos.(No te recomiendo tocar este componente)

El componente _Home.jsx_ solamente enseña las direcciones.

La carpeta **dist** es la de distribucion que se creo con "npm run build", pero no sirve para desplegar.
La carpeta **public** esta carpeta esta de sobra.

## La API (backend)
El backend esta hecho en nodejs 

```text
/
├── src/
│   ├── controllers/              # controladores de las rutas
│   ├── database/          #conexion a la base de datos
│   ├── routes/            # rutas de la api
│   ├── app.js/               # inicio de la app
├── node_modules/            # Dependencias de Node.js instaladas por npm
├── package.json             # Archivo de configuración de npm con las dependencias y los scripts
```

Pequeñas recomendaciones, el codigo estara documentado, para su mejor entendimiento, prueba que corra en localhost antes de hostear el backend, esta todo configurado para que funcione al instalar las dependecias y se debera conectar a las instancias de las bases de datos, hace consultas a la base de datos de la empresa Bamana que es SQL Server, y envie request a una instancia de MYSQL Server.

Para consultarme dudas **PUNTUALES** sobre el proyecto escribe a ojedadanielalejandro333@gmail.com
