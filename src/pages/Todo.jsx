import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const handleCompleteTodo = (todoId) => {
    // const todo
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleEditTodo = (todo) => {

  }

  const handleAddTodo = (e) => {
    e.preventDefault();

    const newId = uuidv4();

    const newTodo = {
      value: todo,
      completed: false,
      id: newId,
    };

    setTodos([...todos, newTodo]);
    

    setTodo("");
  };

  return (
    <div className="h-screen md:w-[768px] mx-auto flex flex-col my-3  justify-center">
      <Form onSubmit={handleAddTodo}>
        <Input
          value={todo}
          setValue={setTodo}
          placeholder={"Add task"}
          type={"text"}
        />
        {/* <Input /> */}
        <Button />
      </Form>
      <h2 className="text-3xl font-bold text-teal-950 px-3 my-3">Todos</h2>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            // onClick={() => handleDeleteTodo(todo.id)}
            className="flex flex-row items-center md:w-[600px] w-full px-3 first:w-3 space-x-2"
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
      })}
    </div>
  );
};

export default Todo;
