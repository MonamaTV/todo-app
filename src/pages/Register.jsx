import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateToTodo = () => {
    navigate("/todo");
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-teal-950">Register</h2>
      <p className="text-sm mb-3">Welcome to MLab</p>
      <Form>
        <Input placeholder={"Username"} type={"text"} />
        <Input placeholder={"Email"} type={"email"} />
        <Input placeholder={"Password"} type={"password"} />
        <Button handleClick={navigateToTodo} />
      </Form>
      <Link className="text-xs text-gray-700" to="/">
        Have an account? Login
      </Link>
    </div>
  );
};

export default Register;
