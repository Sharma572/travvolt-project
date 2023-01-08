import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import userLoginApi, { userLogIn } from "../API/api";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../Auth/logIn/actionType";
import { signUpActions } from "../Auth/SignUp/actionSignUp";
import {
  fetchLogIn,
  loginAction,
  userLogInAction,
} from "../Auth/logIn/actionLogin";

function* userLoginRequest(action) {
  try {
    const user = yield call(action.payload);

    const { data } = user;

    localStorage.setItem("token", data);
    console.log("value saga", data);
    yield put(fetchLogIn(data));
  } catch (error) {
    yield put(fetchLogIn({}));
  }
}
export function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, userLoginRequest);
}
