import React from "react";

function StandardInputField({ type, id, name, placeholder, value, onChange }) {
  const standardInputStyle = "p-2 border border-blue-500 rounded w-full";
  return (
    <input
      className={standardInputStyle}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default StandardInputField;
