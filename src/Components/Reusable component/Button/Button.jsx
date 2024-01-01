import React from "react";

function Button({ children, onHover, className, bg, onClick, type }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex w-full relative   group items-center justify-center rounded-md bg-${bg} px-3 py-2.5 font-semibold leading-7 text-white hover:bg-${bg}  ${className}`}
    >
      <span
        className={`absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-${bg} group-hover:-translate-x-0 group-hover:-translate-y-0`}
      ></span>
      <span
        className={`absolute inset-0 w-full h-full bg-white border-2 border-${bg} group-hover:bg-${onHover}`}
      ></span>
      <span className="relative text-black group-hover:text-white">
        {children}
      </span>
    </button>
  );
}

export default Button;
