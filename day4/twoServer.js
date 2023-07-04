const http = require('http');

// Get the port numbers from environment variables
const port1 = process.env.PORT1 || 3000;
const port2 = process.env.PORT2 || 3001;

// Create server 1
const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server 1 is running!');
});

// Create server 2
const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Server 2 is running!');
});

// Start server 1
server1.listen(port1, () => {
  console.log(`Server 1 running on port ${port1}`);
});

// Start server 2
server2.listen(port2, () => {
  console.log(`Server 2 running on port ${port2}`);
});
