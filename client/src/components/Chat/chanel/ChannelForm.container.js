import { connect } from "react-redux";
import ChannelFormComponent from "./ChannelForm.component";

const mapStateToProps = (state) => ({
  userName: state.chat.room?.userName,
});

export const ChannelFormContainer = connect(
  mapStateToProps,
  null
)(ChannelFormComponent);
