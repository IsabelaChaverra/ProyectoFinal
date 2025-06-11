import { useState } from "react";
import {
  RiLightbulbFlashLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from "react-icons/ri";

function Principal() {
  const [busqueda, setBusqueda] = useState("");

  const materias = [
    {
      nombre: "Frontend II",
      sigla: "FR",
      nota: 4.5,
      estado: "Aprobado",
      color: "bg-green-100",
    },
    {
      nombre: "Backend II",
      sigla: "BK",
      nota: 2.78,
      estado: "No Aprobado",
      color: "bg-red-100",
    },
    {
      nombre: "Base de Datos",
      sigla: "BD",
      nota: 3.4,
      estado: "Aprobado",
      color: "bg-yellow-100",
    },
  ];

  const recursosPorMateria = {
    "Frontend II": "https://platzi.com/cursos/react/",
    "Backend II": "https://platzi.com/cursos/backend-nodejs/",
    "Base de Datos": "https://platzi.com/cursos/basedatos/",
  };

  const sugerencias = [
    {
      titulo: "Curso profesional de React.js",
      recurso: "https://platzi.com/cursos/react/",
    },
    {
      titulo: "Curso de fundamentos de Node.js",
      recurso: "https://platzi.com/cursos/nodejs/",
    },
    {
      titulo: "Curso de diseño de bases de datos",
      recurso: "https://platzi.com/cursos/diseno-bd/",
    },
  ];

  const materiasFiltradas = materias.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="bg-gray-100 p-8 h-[100vh] overflow-y-auto">
      {/* Resumen Académico */}
      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-2">🎓 Resumen Académico</h2>
        <p className="text-gray-600">Progreso general y calificaciones por materia.</p>
      </section>

      {/* Barra de búsqueda */}
      <section className="mb-6">
        <input
          type="text"
          placeholder="Buscar materia..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </section>

      {/* Calificaciones */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
        {materiasFiltradas.length > 0 ? (
          materiasFiltradas.map((materia, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg p-6 ${materia.color} flex flex-col gap-3`}
            >
              <h3 className="text-xl font-bold">{materia.nombre}</h3>
              <p className="text-gray-600 text-sm">Nota: {materia.nota}</p>
              <span
                className={`px-3 py-1 text-sm rounded-full w-fit ${
                  materia.estado === "Aprobado"
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {materia.estado}
              </span>
              <a
                href={recursosPorMateria[materia.nombre]}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-600 hover:underline text-sm"
              >
                Ver recursos de apoyo
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No se encontraron materias.</p>
        )}
      </section>

      {/* Sugerencias */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <RiLightbulbFlashLine className="text-yellow-500" /> Sugerencias personalizadas
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          {sugerencias.map((s, i) => (
            <li key={i}>
              {s.titulo} –{" "}
              <a
                href={s.recurso}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver recurso
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Estado de ánimo académico */}
      <section className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-4">
          {materias.some((m) => m.estado === "No Aprobado") ? (
            <RiEmotionSadLine className="text-5xl text-red-400" />
          ) : (
            <RiEmotionHappyLine className="text-5xl text-green-400" />
          )}
          <div>
            <h3 className="text-xl font-bold">
              {materias.some((m) => m.estado === "No Aprobado")
                ? "¡Ánimo! Aún puedes mejorar tus resultados."
                : "¡Excelente desempeño académico!"}
            </h3>
            <p className="text-gray-500 text-sm">
              Consulta recursos y sigue practicando.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}

export default Principal;
