import { chatActionTypes } from "./Chat.actionTypes";
import { store } from "../../../app/root.store";

export const dispatchSendMessage = (message) =>
  store.dispatch({
    type: chatActionTypes.CHAT_SEND_MESSAGE,
    message,
  });

export const dispatchGetMessage = (message) =>
  store.dispatch({
    type: chatActionTypes.CHAT_GET_MESSAGE,
    message,
  });

export const dispatchOpenChannel = (channelId) =>
  store.dispatch({
    type: chatActionTypes.OPEN_CHANNEL,
    channelId,
  });

export const dispatchCreateChanel = (channel) =>
  store.dispatch({
    type: chatActionTypes.CREATE_CHANNEL,
    channel,
  });

export const dispatchShowAlert = (notification) => {
  store.dispatch({
    type: chatActionTypes.SHOW_ALERT,
    notification,
  });

  setTimeout(() => {
    store.dispatch({
      type: chatActionTypes.HIDE_ALERT,
    });
  }, 5000);
};
