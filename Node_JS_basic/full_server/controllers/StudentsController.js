import { readDatabase } from "../utils";

class StudentsController {
  static async getAllStudents(request, response) {
    // Get the path of the db in res.locals
    const databaseFilename = response.locals.databaseFilename;

    const data = await readDatabase(databaseFilename);
    if (typeof data === "error") {
      response.status(500).send("Cannot load the database");
    } else {
      // Initialize response with the header
      const res = ["This is the list of our students"];

      // Build response by adding each field in the array
      for (const field in data) {
        res.push(
          `Number of students in ${field}: ${data[field].length}. List: ${data[
            field
          ].join(", ")}`
        );
      }

      const formattedRes = res.join("\n");

      response.status(200).send(formattedRes);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const databaseFilename = response.locals.databaseFilename;

    // Get the major argument in the URL
    const major = request.params.major;
    if (major !== "CS" && major !== "SWE") {
      response.status(500).send("Major parameter must be CS or SWE");
    }

    const data = await readDatabase(databaseFilename);
    if (typeof data === "error") {
      response.status(500).send("Cannot load the database");
    } else {
      const res = `List: ${data[major].join(", ")}`;
      response.status(200).send(res);
    }
  }
}

export default StudentsController;
