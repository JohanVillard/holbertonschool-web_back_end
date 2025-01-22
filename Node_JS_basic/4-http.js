const http = require("http");
const { defaults } = require("request");

const port = 1245;

export default app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Holberton School!");
});

app.listen(port);
