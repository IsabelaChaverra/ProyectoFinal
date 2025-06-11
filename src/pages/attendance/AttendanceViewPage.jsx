import { useEffect, useState } from 'react';
import AttendanceCard from '../../components/AttendanceCard';
import { getAttendances } from '../../services/attendanceService';

const AttendanceViewPage = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    getAttendances().then(setAttendances);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Visualización de Asistencia</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendances.map((a) => (
          <AttendanceCard key={a.id} attendance={a} onUpdate={() => {}} isViewOnly />
        ))}
      </div>
    </div>
  );
};

export default AttendanceViewPage;
