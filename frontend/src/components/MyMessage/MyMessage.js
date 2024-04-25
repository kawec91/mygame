import React from "react";
import { useSelector } from "react-redux";

function MyMessage({ data }) {
  const { user } = useSelector((state) => state.auth);
  //Style
  const myStyle = "w-full flex justify-end";
  const recieverStyle = "w-full flex justify-start";

  //Check sender and user id
  const myMsg = data.senderId === user._id;

  //When sender and user id are same or not
  const chatStyle = myMsg ? myStyle : recieverStyle;
  return (
    <div className={chatStyle}>
      <div className="bg-blue-500 text-white p-4 rounded-t-lg rounded-bl-lg">
        {data.message}
      </div>
    </div>
  );
}

export default MyMessage;
