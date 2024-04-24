import React from "react";

function StandardButton({ text, type, next }) {
  const standardButtonStyle =
    "py-2 px-8 rounded uppercase font-bold tracking-wider text-white bg-blue-500 text-center text-lg w-full outline-0";
  return (
    <button type={type} className={standardButtonStyle} onClick={next}>
      {text}
    </button>
  );
}

export default StandardButton;
