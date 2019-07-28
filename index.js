require('dotenv').config(); // load .env variables

const server = require('./server/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT}\n`);
});
