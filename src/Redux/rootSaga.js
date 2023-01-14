import { all } from "redux-saga/effects";

import { loginWatcher } from "./Saga/logInSaga";
import { signUpWatcher } from "./Saga/signUpSaga";
import { ipWatcher } from "./Saga/ipSaga";
import { oneWayWatcher } from "./Saga/oneWaySaga";

export function* rootSaga() {
  yield all([loginWatcher(), signUpWatcher(), ipWatcher(), oneWayWatcher()]);
}
