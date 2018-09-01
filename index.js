const express = require('express');

const server = express();
const port = process.env.PORT || 8000;
const announce = () => console.log(`Listening on ${port}`);

server.listen(port, announce);