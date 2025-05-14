import React, { useState } from "react";
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
} from "react-icons/ri";
import { mostrarConfirmacion } from "../helpers/funciones";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="/public/icon.png"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
            alt="Profile"
          />
          <h1 className="text-xl text-white font-bold">
            {usuario?.nombre || "Usuario"}
          </h1>
          <a
            href="https://www.cesde.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-100 py-2 px-4 rounded-full text-white hover:bg-primary-100/80 transition-colors cursor-pointer"
          >
            Estudiante Cesde
          </a>
        </div>
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Inicio
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiFileCopyLine /> Calificaciones
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Cursos
            </a>
            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine /> Reportes
            </a>
            <button
              onClick={() => {
                mostrarConfirmacion(
                  "¿Cerrar sesión?",
                  "¿Estás seguro que deseas cerrar sesión?",
                  () => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("usuario");
                    window.location.href = "/";
                  },
                  () => {
                    // No hacer nada si se cancela
                  }
                );
              }}
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors text-left"
            >
              <RiPieChartLine /> Cerrar sesión
            </button>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">¿Alguna duda?</p>
            <a href="#">Pregunta acá</a>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};

export default Sidebar;
