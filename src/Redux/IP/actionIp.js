import * as types from "./actionType";

export const fetchIp = (data) => {
  return {
    type: types.IP_SUCCESS,
    payload: data,
  };
};

export const ipAction = () => {
  return {
    type: types.IP_REQUEST,
  };
};
