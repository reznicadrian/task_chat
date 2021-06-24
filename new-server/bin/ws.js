import { Server } from "socket.io";
import * as users from "../users.js";

const ws = ({ server }) => {
  const ws_port = 3003;
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connect", (socket) => {
    console.log("New connection");

    socket.on("join", ({ userName, room }, callback) => {
      const { error, user } = users.addUser({ id: socket.id, userName, room });
      callback();
      if (error) return callback(error);

      socket.join(user.room);

      socket.emit("notification", {
        user: "admin",
        text: `${user.userName}, welcome to the chat: ${user.room}`,
      });
      socket.broadcast.to(user.room).emit("notification", {
        user: "admin",
        text: `${user.userName} has joined`,
      });

      callback();
    });

    socket.on("sendMessage", (message) => {
      const user = users.getUser(socket.id);

      console.log(message);

      socket.broadcast.to(user.room).emit("broadcastMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("disconected");
    });
  });

  io.listen(ws_port);

  return (req, res, next) => {
    next();
  };
};

export { ws };
