import { call, takeLatest } from "@redux-saga/core/effects";
import { wsServices } from "./Chat.services";
import { chatActionTypes } from "./Chat.actionTypes";

// Saga workers

function* fetchEmitMessage({ message }) {
  try {
    yield call(wsServices.emitMessage, message);
  } catch (error) {}
}

// function* fetchGetMessage({ message }) {
//   try {
//     yield call(wsServices.getMessage, message);
//   } catch (error) {}
// }

// Saga watchers

export function* sagaEmitMessage() {
  yield takeLatest(chatActionTypes.CHAT_SEND_MESSAGE, fetchEmitMessage);
}

// export function* sagaGetMessage() {
//   yield takeLatest(chatActionTypes.CHAT_GET_MESSAGE, fetchGetMessage);
// }
