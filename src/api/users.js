import { myAxios } from "../axios/axios";

export const loginUser = async (email, password) => {
  const { data } = await myAxios().get("/users", {
    params: {
      email,
      password,
    },
  });

  if (data.length !== 1) {
    return null;
  }

  return data[0];
};

export const registerUser = async (username, email, password) => {
  const { data } = await myAxios().get("/users", {
    params: {
      email,
    },
  });

  if (data.length > 0) {
    return null;
  }

  const { data: newUser } = await myAxios().post("/users", {
    username,
    email,
    password,   
  });

  return newUser
};
