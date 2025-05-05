import App from "../App";
import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login";
import Contacta from "../pages/Contacta";

export let enrutador = [
  {
    path: "/home",
    element: <RutaProtegida proteger={<App />} />,
  },
  {
    path: "/",
    element: <Login />,
  },

  // isa pregunta por favor que no funciona la propiedad Link de react-router-dom
  // <Link to="/contacta">Contacta</Link>
  {
    path: "/contacta",
    element: <RutaProtegida proteger={<Contacta />} />,
    element: <Contacta />,
  },
];
