import { Student } from './StudentModel';
import { Course } from './CourseModel';

export class Attendance {
  constructor(id, student, course, date, status) {
    this.id = id;
    this.student = new Student(
      student.id,
      student.user,
      student.grade,
      student.bornDate,
      student.direction
    );
    this.course = new Course(course.id, course.name);
    this.date = date;
    this.status = status;
  }
}
