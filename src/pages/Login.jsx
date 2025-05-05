import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerUsuario } from "../services/api";
import { generarToken, mostrarError, mostrarExito} from "../helpers/funciones";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usuario.trim() === "" || contrasena.trim() === "") {
      mostrarError("Campos requeridos", "Por favor completa todos los campos");
      return;
    }

    const usuarioEncontrado = obtenerUsuario(usuario, contrasena);

    if (usuarioEncontrado) {
      const token = generarToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));

      await mostrarExito("Bienvenido", `Hola ${usuarioEncontrado.nombre}`);
      navigate("/home");
    } else {
      mostrarError("Error de inicio de sesión", "Usuario o contraseña incorrectos");
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-purple-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">
          Iniciar Sesión
        </h2>
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-600">Contraseña</label>
          <input
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
