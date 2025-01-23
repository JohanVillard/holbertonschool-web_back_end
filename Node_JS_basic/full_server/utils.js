import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim());
    const studentsData = lines.slice(1);
    const studentsByField = {};

    studentsData.forEach((line) => {
      // Get an array
      const value = line.split(',');
      // The firstname is at index 0
      const firstName = value[0];
      // Get the field of the student
      const field = value[value.length - 1];

      // If the field in the object don't exist
      if (!studentsByField[field]) {
        // Initialize an empty array -> {field: []}
        studentsByField[field] = [];
      }

      // Add the firstname of the student in the corresponding array in object
      studentsByField[field].push(firstName);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
