import { Navigate } from "react-router-dom";

function RutaProtegida({ proteger }) {
  let tokenAcceso = localStorage.getItem("token");
  return tokenAcceso ? proteger : <Navigate to="/" />;
}

export default RutaProtegida;
