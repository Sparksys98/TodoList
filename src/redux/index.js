import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import throttle from "lodash.throttle";
import * as State from "./localStorage";
import App from "../App";
import persistState from "redux-localstorage";
const persistedState = State.loadState();
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose ||
  App ||
  persistedState;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(
  throttle(() => {
    State.saveState({
      todos: store.getState().todos
    });
  }, 1000)
);

export default store;
