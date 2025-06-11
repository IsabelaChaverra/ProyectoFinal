import { useEffect, useState } from 'react';
import AttendanceCard from '../../components/AttendanceCard';
import { getAttendances, updateAttendance } from '../../services/attendanceService';
import { mostrarExito, mostrarError } from '../../helpers/funciones';

const AttendanceEditPage = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    getAttendances().then(setAttendances);
  }, []);

const handleUpdate = async (id, newStatus) => {
  try {
    const asistenciaActual = attendances.find((a) => a.id === id);
    const actualizada = { ...asistenciaActual, status: newStatus };

    await updateAttendance(id, actualizada);

    setAttendances((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );

    mostrarExito("Actualización exitosa", "El estado de asistencia ha sido actualizado.");
  } catch (error) {
    mostrarError("Error al actualizar", error.message);
  }
};

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Asistencia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendances.map((a) => (
          <AttendanceCard key={a.id} attendance={a} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default AttendanceEditPage;
