import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  todos: [
    { id: 1, title: "lorem", completed: false },
    { id: 2, title: "ipsum", completed: false },
  ],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "remove":
      return{
        ...state,
        todos: state.todos.filter((todo)=> todo.id !== action.payload)
      }
  case 'add':
    return{
      ...state,
      todos: [...state.todos,{title: action.payload, completed:false,id: Date.now()}]
      
    }

    default:
  }
   return state
};
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
