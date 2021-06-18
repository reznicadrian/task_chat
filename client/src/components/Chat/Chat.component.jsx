import React, { useEffect } from "react";
import "./Chat.style.css";
import { socket } from "../../app/_utils/socket";
import {
  dispatchGetMessage,
  dispatchShowAlert,
} from "./_services/Chat.actions";
import TopMenuComponent from "../TopMenu/TopMenu.component";
import { MessageContainer } from "./message/Message.container";
import { FormSendMessageContainer } from "./form/FormSendMessage.container";

function ChatComponent({ channels, chat, notification }) {
  useEffect(() => {
    const userName = chat?.userName;
    const room = chat?.room;
    if (chat) {
      socket.emit("join", { userName, room }, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  }, [chat]);

  useEffect(() => {
    socket.on("notification", (notification) => {
      dispatchShowAlert(notification);
    });

    socket.on("broadcastMessage", (message) => {
      dispatchGetMessage(message);
    });
  }, []);

  return (
    <div className={"chat-container"}>
      <TopMenuComponent />
      {notification && (
        <h3 style={{ color: "black", margin: "20px" }}>{notification.text}</h3>
      )}
      <div className={"scroll-container"}>
        {channels.map((channel) => (
          <React.Fragment key={channel.channelId}>
            {channel.isActive ? (
              <>
                {channel.messages.map((message, i) => (
                  <MessageContainer message={message} key={i} />
                ))}
              </>
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <div className={"chat-actions"}>
        <FormSendMessageContainer />
      </div>
    </div>
  );
}

export default ChatComponent;
