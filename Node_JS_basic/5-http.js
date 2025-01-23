const http = require('http');
const url = require('url');
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    // Use fs.readFileSync() for a synchronous version
    const data = await fs.readFile(path, 'utf8');

    // Split the file into lines and remove empty lines
    const lines = data.split('\n').filter((line) => line.trim());

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

    return [
      `Number of students: ${CS.length + SWE.length}`,
      `Number of students in CS: ${CS.length}. List: ${CS.join(', ')}`,
      `Number of students in SWE: ${SWE.length}. List: ${SWE.join(', ')}`,
    ].join('\n');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url).pathname;
  res.writeHead(200, { 'content-type': 'text/plain' });

  // route '/'
  if (reqUrl === '/') {
    res.end('Hello Holberton School!');

    // route '/students'
  } else if (reqUrl === '/students') {
    if (!process.argv[2]) {
      res.end('This is the list of our students\nCannot load the database');
    } else {
      try {
        // Must specify the name of the database ... node 5-http.js path
        const students = await countStudents(process.argv[2]);

        res.write('This is the list of our students\n');
        res.end(students);
      } catch (error) {
        res.end('This is the list of our students\nCannot load the database');
      }
    }
  } else {
    res.end('404 Not Found');
  }
});

app.listen(1245);

module.exports = app;
