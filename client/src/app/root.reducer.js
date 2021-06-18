import { combineReducers } from "redux";
import chatReducer from "../components/Chat/_services/Chat.reducer";

const rootReducer = combineReducers({
  chat: chatReducer,
});

export default rootReducer;
