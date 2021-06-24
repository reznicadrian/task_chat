import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import chatReducer from "../components/Chat/_services/Chat.reducer";
import userReducer from "../components/User/User.reducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    chat: chatReducer,
    user: userReducer,
  });

export default rootReducer;
