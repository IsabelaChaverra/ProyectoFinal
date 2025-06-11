import { Attendance } from '../models/attendanceModel';

const API_URL = 'http://localhost:8080/attendances'; 

export const getAttendances = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.map(item =>
    new Attendance(
      item.id,
      item.student,
      item.course,
      item.date,
      item.status
    )
  );
};

export const updateAttendance = async (id, fullAttendanceObject) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fullAttendanceObject)
  });

  const contentType = response.headers.get('content-type');

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  }

  return null;
};
