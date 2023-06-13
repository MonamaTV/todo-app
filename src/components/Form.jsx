import React from "react";

const Form = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit} className="md:w-[600px] w-full px-3">{children}</form>;
};

export default Form;
