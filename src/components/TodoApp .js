import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { useState } from 'react';

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { text: action.text, completed: false }];
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

const store = createStore(todoReducer,
    // composeWithDevTools(
    //     applyMiddleware(...middleware)
    //     // other store enhancers if any
    // )
);

const TodoApp = () => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        store.dispatch({ type: 'ADD_TODO', text });
        setText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {store.getState().map((todo, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => store.dispatch({ type: 'TOGGLE_TODO', index })}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
