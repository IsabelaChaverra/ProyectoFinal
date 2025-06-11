<<<<<<< HEAD
=======

>>>>>>> 58bcfc051858db9e96e1182521aae64db9dc283f
import RutaProtegida from "../components/RutaProtegida";
import Login from "../pages/Login";
import ContactPage from "../pages/Contacto";
import GestionnotasPro from "../pages/GestionnotasPro";
import Vernotasalum from "../pages/Vernotasalum";
import AttendanceViewPage from "../pages/attendance/AttendanceViewPage";
import AttendanceEditPage from "../pages/attendance/AttendanceEditPage";
import Principal from "../pages/Principal";
import App from "../App";

export let enrutador = [
  {
    path: "/home/",
    element: <RutaProtegida proteger={<App />} />,
    children: [
      {
        index: true,
        element: <Principal />, // ← Página por defecto
      },
<<<<<<< HEAD

=======
>>>>>>> 58bcfc051858db9e96e1182521aae64db9dc283f
      {
        path: "asistencia",
        element: <AttendanceViewPage />,
      },
      {
        path: "editar-asistencia",
        element: <AttendanceEditPage />, 
      },
      {
        path: "asistencia",
        element: <AttendanceViewPage />,
      },
      {
        path: "editar-asistencia",
        element: <AttendanceEditPage />,
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
  },
];