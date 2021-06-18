import { connect } from "react-redux";
import ChatComponent from "./Chat.component";

const mapStateToProps = (state) => ({
  channels: state.chat.channels,
  chat: state.chat.room,
  message: state.chat.message,
  notification: state.chat.notification,
});
const mapDispatchToProps = (dispatch) => ({});

export const ChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent);
