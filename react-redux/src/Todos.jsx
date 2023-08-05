import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Todos() {
  const todos = useSelector((state) => state.todos);

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: text });
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
        />
        <button type="submit">Добавить</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.title}
              <button onClick={() => handleRemove(todo.id)}>-</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todos;
