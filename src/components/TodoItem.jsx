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
      className="my-2 flex flex-row items-center justify-between w-full px-3 first:w-3 space-x-2"
    >
      <div className="flex flex-row items-center space-x-2">
        <Checkbox onChange={() => handleCompleteTodo(todo.id)} />
        <p
          className={`text-sm font-normal ${
            todo.completed ? "line-through" : ""
          }`}
        >
          {todo.value}{" "}
        </p>
      </div>
      <div>
        <button
          className="bg-red-600 py-1 px-3 text-xs text-white mx-1"
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
    </div>
  );
};

export default TodoItem;
