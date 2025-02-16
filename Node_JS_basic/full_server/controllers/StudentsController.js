import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      // Initialize response with the header
      const res = ['This is the list of our students'];

      // Sort object's keys by alphabetic order case insensitive
      // Get all the keys
      const keys = Object.keys(data);

      // Make them case insensitive by converting all in lowercase
      const uppercasedKeys = keys.map((key) => key.toUpperCase());

      // Sort the keys
      uppercasedKeys.sort((key1, key2) => {
        if (key1 < key2) return -1;
        if (key1 > key2) return 1;
        return 0;
      });

      // Rebuild object
      const sortedData = {};
      for (const key of uppercasedKeys) {
        sortedData[key] = data[key];
      }

      // Build response by adding each field in the array
      for (const [field] of Object.entries(sortedData)) {
        res.push(
          `Number of students in ${field}: ${
            sortedData[field].length
          }. List: ${sortedData[field].join(', ')}`,
        );
      }

      const formattedRes = res.join('\n');
      response.status(200).send(formattedRes);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    // Get the major argument in the URL
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(process.argv[2]);

      const res = `List: ${data[major].join(', ')}`;

      response.status(200).send(res);
    } catch (error) {
      response.status(500).send(error.message);
    }
  }
}

export default StudentsController;
