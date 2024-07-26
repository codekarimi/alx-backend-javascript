export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a String');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('length must be a Number');
    }
    this._length = length;

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an Array of Strings');
    }
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a String');
    }
    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a Number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an Array of Strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
