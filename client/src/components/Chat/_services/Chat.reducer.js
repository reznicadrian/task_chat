import { chatActionTypes } from "./Chat.actionTypes";
import produce from "immer";

const initialState = {
  room: null,
  channels: [],
  notification: null,
  message: null,
};

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case chatActionTypes.CHAT_SEND_MESSAGE:
      return produce(state, (items) => {
        items.channels.map((channel) =>
          channel.isActive
            ? (channel.messages = [...channel.messages, action.message])
            : channel.messages
        );
      });

    case chatActionTypes.CHAT_GET_MESSAGE:
      return produce(state, (items) => {
        items.channels.map((channel) =>
          channel.isActive
            ? (channel.messages = [...channel.messages, action.message])
            : channel.messages
        );
      });

    case chatActionTypes.OPEN_CHANNEL:
      return produce(state, (items) => {
        items.channels.forEach((channel) => {
          channel.isActive =
            parseInt(channel.channelId) === parseInt(action.channelId);
        });
      });

    case chatActionTypes.CREATE_CHANNEL:
      return produce(state, (items) => {
        items.channels.push({
          channelId: action.channel.channelId,
          userName: action.channel.userName,
          room: action.channel.room,
          isActive: true,
          messages: [],
        });
        items.channels.forEach((channel) => {
          channel.isActive =
            parseInt(channel.channelId) === parseInt(action.channel.channelId);
        });
        items.room = action.channel;
      });

    case chatActionTypes.SHOW_ALERT:
      return {
        ...state,
        notification: action.notification,
      };

    case chatActionTypes.HIDE_ALERT:
      return {
        ...state,
        notification: null,
      };

    default:
      return state;
  }
}
