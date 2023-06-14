import { myAxios } from "../axios/axios";

export const addTodo = async (todo) => {
  const { data } = await myAxios().post("/todos", todo, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const getTodos = async (email) => {
    console.log(email)
  const { data } = await myAxios().get("/todos", {
    params: {
      userId: email,
    },
  });
  console.log(data)
  return data;
};

export const deleteTodo = async (todoId) => {
  const { data } = await myAxios().delete(`/todos/${todoId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
