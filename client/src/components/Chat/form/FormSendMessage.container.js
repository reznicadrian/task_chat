import { connect } from "react-redux";
import FormSendMessageComponent from "./FormSendMessage.component";

const mapStateToProps = (state) => ({
  userName: state.chat.room?.userName,
});

export const FormSendMessageContainer = connect(
  mapStateToProps,
  null
)(FormSendMessageComponent);
