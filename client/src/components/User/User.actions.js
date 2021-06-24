import { store } from "../../app/root.store";
import { userActionTypes } from "./User.actionsTypes";

export const dispatchRegisterUser = (data) =>
  store.dispatch({
    type: userActionTypes.REGISTER_USER_REQUEST,
    data,
  });
