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
  if (username === "" || email === "" || password === "") return null;
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

  const { password: pass, ...restUser } = newUser;
  return restUser;
};
