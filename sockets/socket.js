const { io } = require("../index");
// Mensajes de sockets
io.on("connection", (client) => {
  console.log("Client connected");

  client.on("disconnect", () => {
    console.log("CLient disconnected");
  });

  client.on("message", (payload) => {
    console.log(payload);
    io.emit("message", {
      admin: "Nuevo mensaje",
      payload,
    });
  });
});
