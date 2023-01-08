import { legacy_createStore, applyMiddleware ,compose} from "redux";
import rootReducer from "./root-reducer";

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";


const sagaMiddleware=createSagaMiddleware()
const store=legacy_createStore(
rootReducer,
compose(applyMiddleware(sagaMiddleware),  
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)
    
sagaMiddleware.run(rootSaga)
export default store;



