import { Server } from "socket.io";
import * as users from "../users.js";

const ws = ({ server }) => {
  const ws_port = 3003;
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connect", (socket) => {
    console.log("New connection");

    socket.on("join", ({ me, channelId }, callback) => {
      const { error, user } = users.addUser({ id: socket.id, me, channelId });
      callback();
      if (error) return callback(error);

      socket.join(user.channelId);

      // socket.broadcast.to(user.channelId).emit('connect', '123')

    //   socket.emit("notification", {});
    //   socket.broadcast.to(user.channelId).emit("notification", {
    //     user: "admin",
    //     text: `${user.me} has joined`,
    //   });
    //
        callback();
     });

    socket.on("sendMessage", (text) => {
      const user = users.getUser(socket.id);

      console.log(text);

      socket.broadcast.to(user.channelId).emit("broadcastMessage", text);
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
