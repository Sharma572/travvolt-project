import { combineReducers } from "redux";
import { logInReducer } from "./Auth/logIn/logInReducer";
import { signUpReducer } from "./Auth/SignUp/signUpReducer";
import { ipReducer } from "./IP/ipReducer";
import { oneWayReducer } from "./FlightSearch/OneWay/oneWayReducer";
import { UserTableDataReducer } from "./Auth/UserData/userDataReducer";
import { AdminAuthReducer } from "./Auth/AdminAuth/AdminAuthReducer";
import { AdminSignOutReducer } from "./Auth/AdminSignOut/AdminSighOutReducer";
import { ActiveStatusReducer } from "./Auth/activeStatus/activeStatusReducer";
import { MarkUpReducer } from "./Auth/markUp/markUpReducer";

const rootReducer = combineReducers({
  logIn: logInReducer,
  signUp: signUpReducer,
  ip: ipReducer,
  oneWay: oneWayReducer,
  userTableData: UserTableDataReducer,
  adminAuth: AdminAuthReducer,
  adminSignOut: AdminSignOutReducer,
  activeStatus: ActiveStatusReducer,
  addMarkUp: MarkUpReducer,
});

export default rootReducer;
