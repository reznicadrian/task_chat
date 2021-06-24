import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./root.saga";
import rootReducer from "./root.reducer";
import history from "./_utils/browserHistory";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools(
  applyMiddleware(createLogger(), sagaMiddleware)
);

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: { user: userFromStorage },
};

export const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers
);

sagaMiddleware.run(rootSaga);
