import * as types from "./actionType"

const initialState = {
    isLogin: false,
    token: "",
    isLoading: false,
    isError: false,
  };

  export const logInReducer=(state=initialState, action)=>
  {
    const {type, payload}=action;

    switch(type)
    {
      case types.LOGIN_SUCCESS:
        return{
            ...state,
           
            token:payload,
            isLoading:false,
            isError:false,

      }


      
      case types.LOGIN_REQUEST:
        return{
            ...state,
            isLoading:true,
            isError:false,

      }
      
      
      default:
            return state;
    }

  }