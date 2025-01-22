const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Use fs.readFile() for an asynchronous version
    const data = await fs.readFile(path, 'utf8');

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

      // Get the index of the field
      const field = values.length - 1;

      // Distribute value using field
      if (values[field] === 'CS') {
        CS.push(values[0]);
      } else if (values[field] === 'SWE') {
        SWE.push(values[0]);
      }
    });

    console.log(`Number of students: ${CS.length + SWE.length}`);

    console.log(
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
    );
  } catch (error) {
    console.log(typeof data);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
