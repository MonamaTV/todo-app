import React from "react";
import Checkbox from "./Checkbox";

const TodoItem = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  return (
    <div
      key={todo.id}
      className="flex flex-row items-center w-full px-3 first:w-3 space-x-2"
    >
      <Checkbox onChange={() => handleCompleteTodo(todo.id)} />
      <p
        className={`text-lg font-normal ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {todo.value}{" "}
      </p>
      <button
        className="bg-red-600 py-1 px-3 text-xs text-white"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Delete
      </button>
      <button
        className="bg-green-600 py-1 px-3 text-xs text-white"
        onClick={() => handleEditTodo(todo.id)}
      >
        Edit
      </button>
    </div>
  );
};

export default TodoItem;
