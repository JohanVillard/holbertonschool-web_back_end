console.log("Welcome to Holberton School, what is your name?");

process.stdin.on("data", input => {
  process.stdout.write(`Your name is ${input}`);

  process.exit();
});

process.on("exit", () => {
  console.log("This important software is now closing");
});
