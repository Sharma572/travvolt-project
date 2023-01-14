import * as types from "./actionType";

const initState = {
  ipData: {},

  isError: false,

  showSuccessMessage: false,
};

export const ipReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.IP_REQUEST:
      return {
        ...state,
        isError: false,
      };

    case types.IP_SUCCESS:
      return {
        ...state,
        ipData: payload,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
