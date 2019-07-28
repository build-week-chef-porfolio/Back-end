const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { handleError } = require('../helpers');
const router = require('../routes');

const server = express();

server.get('/', (req, res, next) => res.status(200).json('WELCOME!!!'));

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', router);
server.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = server;
