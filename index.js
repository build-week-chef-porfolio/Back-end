require('dotenv').config(); // load .env variables

const server = require('./server/server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n=== Server listening on port ${PORT}\n`);
});
  