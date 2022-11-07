const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("No express.js!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
