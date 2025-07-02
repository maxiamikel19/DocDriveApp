import React from "react";

export const VTextInput = ({ name, type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      id={name}
      required
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
