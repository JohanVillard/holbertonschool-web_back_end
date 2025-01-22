const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs");

const port = 1245;

const countStudents = path => {
  try {
    // Use fs.readFileSync() for a synchronous version
    const data = fs.readFileSync(path, "utf8");
    // Split the file into lines and remove empty lines
    const lines = data.split("\n").filter(line => line);

    // Remove the header
    const studentData = lines.slice(1);

    const CS = [];
    const SWE = [];

    // Iterate over each line to access individual rows
    studentData.forEach(line => {
      // Split each line by comma to access individual values
      const values = line.split(",");
      const field = values.length - 1;

      if (values[field] === "CS") {
        CS.push(values[0]);
      } else if (values[field] === "SWE") {
        SWE.push(values[0]);
      }
    });

    return [CS, SWE];
  } catch (error) {
    throw new Error("Cannot load the database");
  }
};

const app = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });

  const reqUrl = url.parse(req.url).pathname;
  if (reqUrl === "/") {
    res.end("Hello Holberton School!");
  }

  if (reqUrl === "/students") {
    const students = countStudents("database.csv");

    const response = [
      "This is the list of our students",
      `Number of students: ${students[0].length + students[1].length}`,
      `Number of students in CS: ${
        students[0].length
      }. List: ${students[0].join(", ")}`,
      `Number of students in SWE: ${
        students[1].length
      }. List: ${students[1].join(", ")}`
    ].join("\n");

    res.end(response);
  }
});

app.listen(port);

module.exports = app;
