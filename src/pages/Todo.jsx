import React, { useContext, useEffect, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../components/TodoItem";
import { UserContext } from "../context/authContext";
import { addTodo, deleteTodo, getTodos } from "../api/todos";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [user, setUser] = useContext(UserContext);
  const [todo, setTodo] = useState("");

  const handleTodoInput = (event) => {
    const value = event.target.value;

    setTodo(value);
  };

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

  const handleDeleteTodo = async (todoId) => {

    try {
      const response = await deleteTodo(todoId);
      if(response) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
      }
    } catch (error) {
      
    }
  };

  const handleEditTodo = (todoId) => {};

  const handleAddTodo = async (e) => {
    e.preventDefault();

    const newId = uuidv4();

    const newTodo = {
      value: todo,
      completed: false,
      id: newId,
      userId: user.email,
    };

    try {
      const response = await addTodo(newTodo);
      if (!response) {
        return;
      }

      setTodos([...todos, newTodo]);
    } catch (error) {
      console.log(error);
    }
    setTodo("");
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const myTodos = await getTodos(user.email);
        setTodos(myTodos);
      } catch (error) {
        setTodos([]);
      }
    };

    fetchTodos();
  }, []);

  return (
    user && (
      <div className="bg-green-950 text-white w-screen h-screen flex flex-col py-5 items-center">
        <div className="md:w-[500px] w-full">
          <h2 className="font-bold text-3xl px-3 my-3  w-full">
            Welcome, {user.username}
          </h2>
          <Form onSubmit={handleAddTodo}>
            <Input
              name={"todo"}
              setValue={handleTodoInput}
              placeholder={"Add task"}
              type={"text"}
            />
            <Button />
          </Form>
          <div className="border border-green-900 shadow-lg rounded-lg py-5 my-3 mx-3">
            <Form onSubmit={handleAddTodo}>
            <input
              type={"text"}
              className="text-slate-900 focus:outline focus:outline-green-700 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
              placeholder={"Search task"}
    />
            </Form>
            <h2 className="text-xl text-white px-3 my-3">Todos</h2>
            {todos.map((todo) => {
              return (
                <TodoItem
                  handleCompleteTodo={handleCompleteTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleEditTodo={handleEditTodo}
                  todo={todo}
                  key={todo.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Todo;
