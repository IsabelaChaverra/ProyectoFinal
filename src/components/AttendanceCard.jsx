import { useState } from 'react';
import {
  UserIcon,
  BookOpenIcon,
  CalendarIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/solid';

const AttendanceCard = ({ attendance, onUpdate, isViewOnly = false }) => {
  const [status, setStatus] = useState(attendance.status);

  const handleChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    if (onUpdate) {
      onUpdate(attendance.id, newStatus);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 w-full max-w-sm hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <UserIcon className="w-10 h-10 text-blue-500" />
        <div>
          <h3 className="text-lg font-bold">
  {attendance?.student?.user?.name || "Nombre no disponible"}
</h3>
<span className="text-gray-700">
  {attendance?.course?.name || "Curso no disponible"}
</span>

        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 text-sm">
        <BookOpenIcon className="w-5 h-5 text-indigo-500" />
        <span className="text-gray-700">{attendance.course.name}</span>
      </div>

      <div className="flex items-center gap-2 mb-4 text-sm">
        <CalendarIcon className="w-5 h-5 text-green-500" />
        <span className="text-gray-700">{attendance.date}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="status" className="font-medium text-gray-600">
          Estado:
        </label>

        {isViewOnly ? (
          <span className={`font-semibold ${getStatusColor(status)}`}>
            {status}
          </span>
        ) : (
          <select
            id="status"
            value={status}
            onChange={handleChange}
            className="rounded-md border border-gray-300 px-2 py-1 text-sm"
          >
            <option value="PRESENT">PRESENTE</option>
            <option value="ABSENT">AUSENTE</option>
            <option value="JUSTIFIED">JUSTIFICADO</option>
          </select>
        )}

        {!isViewOnly && (
          <PencilSquareIcon className="w-4 h-4 text-gray-400 ml-2" />
        )}
      </div>
    </div>
  );
};

function getStatusColor(status) {
  switch (status) {
    case 'PRESENT':
      return 'text-green-600';
    case 'ABSENT':
      return 'text-red-500';
    case 'JUSTIFIED':
      return 'text-yellow-600';
    default:
      return 'text-gray-600';
  }
}

export default AttendanceCard;
