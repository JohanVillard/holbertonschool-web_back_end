const fs = require('fs').promises;
const express = require('express');

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    // Use fs.readFileSync() for a synchronous version
    const data = await fs.readFile(path, 'utf8');

    // Split the file into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim());

    // Remove the header
    const students = lines.slice(1);

    const CS = [];
    const SWE = [];

    // Iterate over each line to access individual rows
    students.forEach((line) => {
      // Split each line by comma to access individual values
      const values = line.split(',');
      const field = values.length - 1;

      if (values[field] === 'CS') {
        CS.push(values[0]);
      } else if (values[field] === 'SWE') {
        SWE.push(values[0]);
      }
    });

    return [
      `Number of students: ${CS.length + SWE.length}`,
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`,
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
    ].join('\n');
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(process.argv[2]);
    console.log(students);

    res.end(`This is the list of our students\n${students}`);
  } catch (error) {
    res.end('This is the list of our students\nCannot load the database');
  }
});

app.listen(port);

module.exports = app;
