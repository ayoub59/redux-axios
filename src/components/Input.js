import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import { connect } from 'react-redux';

function Input() {
  const [input, setInput] = useState("");



  const addTodo = (e) => {
    console.log(input)
    dispatch(saveTodo({
      item: input,
      id: Date.now(),
      done: false
    }))

  }

  // some shit from chat gpt
  // the reducer
  const updateValueReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_VALUE':
        return {
          ...state,
          value: action.payload
        };
      default:
        return state;
    }
  };

  // action creator function that dispatches the UPDATE_VALUE action
  const updateValue = (value) => {
    return {
      type: 'UPDATE_VALUE',
      payload: value
    };
  };


  // Connect your component to Redux using the connect function from the react-redux library:

  const mapStateToProps = (state) => {
    return {
      value: state.value
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      updateValue: (value) => dispatch(updateValue(value))
    };
  };

  // export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateValue(inputValue);
  };

  const dispatch = useDispatch()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Update Value</button>
      </form>
      {/* <h1>redux to do list</h1>
      <input type={"text"} value={input} onChange={(e) => { setInput(e.target.value) }} />
      <button onClick={addTodo}>Add</button> */}
    </div>
  );
}

export default Input;
