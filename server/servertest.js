const http = require("http");

const hostname = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("No express\n");
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at ${PORT}`);
});
