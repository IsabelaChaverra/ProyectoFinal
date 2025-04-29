
import App from "../App";
import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login";

export let enrutador = [
  {
    path: "/home",
    element: <RutaProtegida proteger={<App />} />,
  },
  {
    path: "/",
    element: <Login />,
  },
];
