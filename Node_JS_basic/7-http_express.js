const fs = require('fs').promises;
const express = require('express');

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    // Use fs.readFileSync() for a synchronous version
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
      const field = values.length - 1;

      if (values[field] === 'CS') {
        CS.push(values[0]);
      } else if (values[field] === 'SWE') {
        SWE.push(values[0]);
      }
    });

    return [CS, SWE];
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let students;
  let response;

  if (process.argv[2]) {
    students = await countStudents(process.argv[2]);

    response = [
      'This is the list of our students',
      `Number of students: ${students[0] + students[1]}`,
      `Number of students in CS: ${students[0]}. List: ${students[0].join(
        ', ',
      )}`,
      `Number of students in SWE: ${students[1].length}. List: students[1].join(', ')}`,
    ].join('\n');
  } else {
    response = 'This is the list of our students\nCannot load the database';
  }

  res.send(response);
});

app.listen(port);

module.exports = app;
