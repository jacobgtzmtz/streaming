//Libraries for react.
import React from "react";
import ReactDOM from "react-dom";

//Libraries for redux.
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";

//HomeMade components.
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
