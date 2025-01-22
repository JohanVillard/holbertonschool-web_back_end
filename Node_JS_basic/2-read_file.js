const fs = require('fs');

function countStudents(path) {
  try {
    // Use fs.readFileSync() for a synchronous version
    const data = fs.readFileSync(path, 'utf8');
    // Split the file into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line);

    // Remove the header
    const studentData = lines.slice(1);

    const CS = [];
    const SWE = [];

    // Iterate over each line to access individual rows
    studentData.forEach((line) => {
      // Split each line by comma to access individual values
      const values = line.split(',');
      const field = values.length - 1;

      if (values[field] === 'CS') {
        CS.push(values[0]);
      } else if (values[field] === 'SWE') {
        SWE.push(values[0]);
      }
    });

    process.stdout.write(`Number of students: ${CS.length + SWE.length}\n`);

    process.stdout.write(
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}\n`,
    );
    process.stdout.write(
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}\n`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
