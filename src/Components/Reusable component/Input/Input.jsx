import React from "react";

function Input({ type, label, placeholder }) {
  return (
    <div>
      <label htmlFor={label} className="text-base font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <input
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type={type}
          placeholder={placeholder}
          id={label}
        ></input>
      </div>
    </div>
  );
}

export default Input;
