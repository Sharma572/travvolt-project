import * as types from "./actionType";

const initialState = {
 
  isLogin: false,
  isLoading: false,
  isError: false,
};

export const AdminSignOutReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADMIN_SIGN_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

   

    default:
      return state;
  }
};
