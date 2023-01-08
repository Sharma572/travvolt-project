import { combineReducers } from "redux";
import { logInReducer } from "./Auth/logIn/logInReducer";
import { signUpReducer } from "./Auth/SignUp/signUpReducer";
   
const rootReducer= combineReducers(
    {
      logIn:logInReducer,
      signUp:signUpReducer
        
    }
)

export default rootReducer;