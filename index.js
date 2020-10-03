const path = require("path");
const express = require("express");
const publicPath = path.resolve(__dirname, "public");

require("dotenv").config();

// Express App
const app = express();

// Node server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./sockets/socket");

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server runnig on port ${process.env.PORT}`);
});
