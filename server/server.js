import express from "express";
import { Server } from "socket.io";
import http from "http";
import chatRouter from "./router.js";
import { addUser } from "./users.js";
import { getUser } from "./users.js";

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connect", (socket) => {
  console.log("New connection");

  socket.on("join", ({ userName, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, userName, room });
    callback();
    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("notification", {
      user: "admin",
      text: `${user.userName}, welcome to the chat: ${user.room}`,
    });
    socket.broadcast
      .to(user.room)
      .emit("notification", {
        user: "admin",
        text: `${user.userName} has joined`,
      });

    callback();
  });

  socket.on("sendMessage", (message) => {
    const user = getUser(socket.id);

    console.log(message);

    socket.broadcast.to(user.room).emit("broadcastMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("disconected");
  });
});

app.use(chatRouter);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
