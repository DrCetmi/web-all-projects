import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ text, completed, onToggle }) {
  return (
    <div
      className="my-3 border-bottom"
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      <input
        className="mx-2"
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      {text}
    </div>
  );
}

export default Todo;
