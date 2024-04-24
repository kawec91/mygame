import React from "react";

function MyMessage({ data }) {
  return (
    <div className="w-full flex justify-end">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg rounded-bl-lg">
        {data.message}
      </div>
    </div>
  );
}

export default MyMessage;
