import { createServer } from 'http';

const port = 1245;

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

export default app;

app.listen(port);
