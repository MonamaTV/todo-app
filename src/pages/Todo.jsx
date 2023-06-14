import React, { useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../components/TodoItem";

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
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleEditTodo = (todoId) => {};

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
    <div className="bg-green-950 text-white w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-start">
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
      <h2 className="text-3xl font-bold text-white px-3 my-3">Todos</h2>
      {todos.map((todo) => {
        return (
          <TodoItem
            handleCompleteTodo={handleCompleteTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            todo={todo}
            key={todo.key}
          />
        );
      })}
      </div>
    </div>
  );
};

export default Todo;
