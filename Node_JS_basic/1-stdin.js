console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  process.stdout.write(`Your name is ${input}`);

  // End the stdin process
  process.stdin.end();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
