import { socket } from "../../../app/_utils/socket";

const emitMessage = (message) => {
  socket.emit("sendMessage", message);
};

const getMessage = (message) => {
  socket.on("broadcastMessage", message);
};

export const wsServices = {
  emitMessage,
  getMessage,
};
