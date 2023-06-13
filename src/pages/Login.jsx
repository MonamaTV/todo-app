import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const navigateToTodo = () => {
    navigate("/todo");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-teal-950">Login</h2>
      <p className="text-sm mb-3">Welcome back to MLab</p>
      <Form>
        <Input placeholder={"Email"} type={"email"} />
        <Input placeholder={"Password"} type={"password"} />
        {/* <Input /> */}
        <Button handleClick={navigateToTodo} />
      </Form>
      <Link className="text-xs text-gray-700" to="/register">
        Don't have an account? Register
      </Link>
    </div>
  );
};

export default Login;
