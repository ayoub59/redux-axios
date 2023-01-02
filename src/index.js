import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import counter from "./reducers/counter.js";
// import { Provider } from "react";
import { Provider } from "react-redux";

let store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
