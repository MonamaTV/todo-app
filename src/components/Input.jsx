import React from "react";

const Input = ({ placeholder, type, value, setValue }) => {
  return (
    <input type={type} value={value} onChange={(e) => setValue(e.target.value)} className="border border-teal-700 px-3 py-2 outline-none w-full my-1" placeholder={placeholder}/>
  );
};

export default Input;
