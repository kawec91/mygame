import React from "react";

function MyMessageRecive({ data }) {
  console.log(data);
  return <div>MMR: {data.message}</div>;
}

export default MyMessageRecive;
