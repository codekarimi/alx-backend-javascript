const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const [firstName, , , field] = lines[i].split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const field in fields) {
      if (field) {
        const studentCount = fields[field].length;
        const studentList = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
