import { all, fork } from "@redux-saga/core/effects";
import {
  sagaEmitMessage,
  // sagaGetMessage,
} from "../components/Chat/_services/Chat.sagas";

export const rootSaga = function* root() {
  yield all([fork(sagaEmitMessage)]);
  // yield all([fork(sagaGetMessage)]);
};
