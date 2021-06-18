import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootSaga} from "./root.saga";
import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(createLogger(), sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
