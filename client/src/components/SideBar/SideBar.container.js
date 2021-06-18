import { connect } from "react-redux";
import SideBarComponent from "./SideBar.component";

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export const SideBarContainer = connect(
  mapStateToProps,
  null
)(SideBarComponent);
