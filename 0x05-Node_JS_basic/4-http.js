const { createServer } = require('http');

const port = 1245;
const hostname = '127.0.0.1';

const app = createServer((req, res) => {
  res.statuscode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname);

module.exports = app;
