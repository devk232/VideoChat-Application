const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const socketIO = require("socket.io");
const io = socketIO(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/join", (req, res) => {
  res.send({ link: uuidv4() });
});
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log("socket connected");
  socket.on("join room", (user) => {
    const { roomId, userId } = user;
    socket.join(userId);
    socket.to(roomId).broadcast.emit("new-user connect", user);
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});
