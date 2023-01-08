import {all} from "redux-saga/effects"

import { loginWatcher } from "./Saga/logInSaga"
import { signUpWatcher } from "./Saga/signUpSaga"

export function* rootSaga(){
    yield all([loginWatcher(), signUpWatcher()])
}
