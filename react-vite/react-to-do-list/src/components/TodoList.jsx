import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onToggle }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => onToggle(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
