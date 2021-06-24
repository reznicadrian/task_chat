import { call, put, takeLatest } from "@redux-saga/core/effects";
import { userServices } from "./User.services";
import { userActionTypes } from "./User.actionsTypes";

function* fetchRegisterUser({ data }) {
  try {
    const response = yield call(userServices.registerUser, data);
    yield put({
      type: userActionTypes.REGISTER_USER_SUCCESS,
      user: response.data,
    });
  } catch (error) {}
}

export function* watcherRegisterUser() {
  yield takeLatest(userActionTypes.REGISTER_USER_REQUEST, fetchRegisterUser);
}
