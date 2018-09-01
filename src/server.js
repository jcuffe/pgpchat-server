const express = require('express');
const graphqlHandler = require('./schema');
const { jwtValidator } = require('./middleware/validators');

const server = express();
const port = process.env.PORT || 8000;
const announce = () => console.log(`Listening on ${port}`);

server.use(jwtValidator);
server.use('/graphql', graphqlHandler);
server.listen(port, announce);