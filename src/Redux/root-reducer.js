import { combineReducers } from "redux";
import { logInReducer } from "./Auth/logIn/logInReducer";
import { signUpReducer } from "./Auth/SignUp/signUpReducer";
import { ipReducer } from "./IP/ipReducer";
import { oneWayReducer } from "./FlightSearch/OneWay/oneWayReducer";

const rootReducer = combineReducers({
  logIn: logInReducer,
  signUp: signUpReducer,
  ip: ipReducer,
  oneWay: oneWayReducer,
});

export default rootReducer;
