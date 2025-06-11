import { useEffect, useState } from 'react';
import AttendanceCard from '../components/AttendanceCard';
import { getAttendances, updateAttendance } from '../services/attendanceService';

const AttendancePage = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    getAttendances().then(data => {
      setAttendances(data);
      console.log("Asistencia cargada:", data);
    });
  }, []);

  const handleUpdate = (id, newStatus) => {
    updateAttendance(id, newStatus).then(() => {
      setAttendances(prev =>
        prev.map(item =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );
    });
  };

  return (
    <div>
      <h1>Asistencia Estudiantes</h1>
      <div className="card-container">
        {attendances.map(a => (
          <AttendanceCard key={a.id} attendance={a} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default AttendancePage;
