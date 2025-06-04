
import App from "../App";
import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login";
import ContactPage from "../pages/Contacto";
import GestionnotasPro from "../pages/GestionnotasPro";
import Vernotasalum from "../pages/Vernotasalum";

export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida proteger={<App />} />,
    children: [

      {
        path: "gestionnotaspro",
        element: <GestionnotasPro />,
      },
      {
        path: "vernotasalum",
        element: <Vernotasalum />,
      },
    ],

  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/contacto",
    element: <ContactPage />,
  }
];
