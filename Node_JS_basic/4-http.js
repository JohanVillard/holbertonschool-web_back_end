const { createServer } = require('node:http');

const port = 1245;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

server.listen(port);
