import React from "react";

const Button = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="w-full px-3 py-2 text-center bg-teal-700 my-1 text-white"
    >
      Submit
    </button>
  );
};

export default Button;
