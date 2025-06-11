import { User } from './UserModel';

export class Student {
  constructor(id, user, grade, bornDate, direction) {
    this.id = id;
    this.user = new User(
      user.id,
      user.name,
      user.email,
      user.phone,
      user.userType
    );
    this.grade = grade;
    this.bornDate = bornDate;
    this.direction = direction;
  }
}
