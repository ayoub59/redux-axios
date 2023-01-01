import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';


// action // events 
const increment = () => {
  return {
    type: "increment"
  }
}
const decrement = () => {
  return {
    type: "decrement"
  }
}

// reducer // like puting the finger on the triger before shoting, you need to know which finger i guess?????

const counter = (state = 0, action) => {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
  }
}

// store where we put our data

let store = createStore(counter);

// console 
store.subscribe(() => { console.log(store.getState()) })

// dispatch // fire the function
store.dispatch(increment())



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

