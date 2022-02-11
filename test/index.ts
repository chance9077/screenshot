import * as http from 'http';
import app from '../api/now';

const hostname = 'localhost';
const port = 8080;

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})