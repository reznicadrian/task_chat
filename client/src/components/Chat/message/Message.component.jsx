import React from "react";

function MessageComponent({ message, userName }) {
  let currentUser = false;

  if (message.userName === userName) {
    currentUser = true;
  }

  return (
    <div
      className={"message-container"}
      style={
        currentUser ? { alignItems: "flex-end" } : { alignItems: "flex-start" }
      }
    >
      <p>{message.message}</p>
      <span>{message.userName}</span>
    </div>
  );
}

export default MessageComponent;
