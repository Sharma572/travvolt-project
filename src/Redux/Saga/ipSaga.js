import { takeEvery, takeLatest, call, put } from "redux-saga/effects";
import userApi from "../API/api";
import { IP_REQUEST } from "../IP/actionType";
import { fetchIp } from "../IP/actionIp";

function* userIpRequest() {
  try {
    const ip = yield call(userApi.userIP);
    yield put(fetchIp(ip));
  } catch (error) {
    console.log(error);
  }
}
export function* ipWatcher() {
  yield takeLatest(IP_REQUEST, userIpRequest);
}
