import React from "react";
import { connect } from "react-redux";

// the actions
const increment = () => {
  return {
    type: "increment",
  };
};
const decrement = () => {
  return {
    type: "decrement",
  };
};
// reducer
const initialState = {
  count: 10,
};
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state.count + 1;
    case "decrement":
      return state.count - 1;
    default:
      return state.count;
  }
};
export default counter;
// dispatch

// export default connect(null, mapDispatchToProps)(Button);
