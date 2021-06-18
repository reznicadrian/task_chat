import { connect } from "react-redux";
import MessageComponent from "./Message.component";

const mapStateToProps = (state) => ({
  userName: state.chat.room?.userName,
});

export const MessageContainer = connect(
  mapStateToProps,
  null
)(MessageComponent);
