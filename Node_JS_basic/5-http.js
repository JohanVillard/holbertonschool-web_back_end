const http = require('http');
const url = require('url');
const fs = require('fs').promises;

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

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname;

  if (reqUrl === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl === '/students') {
    try {
      let students = [];

      if (process.argv[2]) {
        // Must specify the name of the database ... node 5-http.js path
        students = await countStudents(process.argv[2]);
      }

      const response = [
        'This is the list of our students',
        `Number of students: ${(students[0] ? students[0].length : 0)
          + (students[1] ? students[1].length : 0)}`,
        `Number of students in CS: ${
          students[0] ? students[0].length : 0
        }. List: ${students[0] ? students[0].join(', ') : ''}`,
        `Number of students in SWE: ${
          students[1] ? students[1].length : 0
        }. List: ${students[1] ? students[1].join(', ') : ''}`,
      ].join('\n');

      res.writeHead(200, { 'content-type': 'text/plain' });
      res.end(response);
    } catch (error) {
      res.writeHead(404);
      res.end(error.message);
    }
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});

app.listen(1245);

module.exports = app;
