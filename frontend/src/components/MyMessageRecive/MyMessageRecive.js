import React from "react";

function MyMessageRecive({ data }) {
  console.log(data);
  return (
    <div className="w-full flex justify-start">
      <div className="bg-blue-500 text-white p-4 rounded-t-lg rounded-br-lg">
        {data.message}
      </div>
    </div>
  );
}

export default MyMessageRecive;
