import { all } from "redux-saga/effects";

import { loginWatcher } from "./Saga/logInSaga";
import { signUpWatcher } from "./Saga/signUpSaga";
import { ipWatcher } from "./Saga/ipSaga";
import { oneWayWatcher } from "./Saga/oneWaySaga";
import {userDataTableWatcher} from "./Saga/userSaga"
import { getAdminWatcher } from "./Saga/adminAuth";
import { activeSegaWatcher } from "./Saga/activeStatusSega";
import { markUpWatcher } from "./Saga/markUpSaga";

export function* rootSaga() {
  yield all([loginWatcher(), signUpWatcher(), ipWatcher(), oneWayWatcher(), userDataTableWatcher(), getAdminWatcher(),getAdminWatcher(),activeSegaWatcher(),markUpWatcher() ]);
}
