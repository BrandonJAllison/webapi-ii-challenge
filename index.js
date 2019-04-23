const express = require('express');
const postRoutes = require('./post-routes/post-routes');

const server = express();

server.use(express.json());
server.use('/api/posts', postRoutes);

server.listen(8000, () => {
    console.log(`The server is listening on port 8000`);
})