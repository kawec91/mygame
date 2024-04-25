import React from "react";
import { useSelector } from "react-redux";
import { extractTime } from "../../utils/extractTime";

function MyMessage({ data }) {
  const { user } = useSelector((state) => state.auth);
  //Style
  const myStyle = "w-full flex justify-end text-right";
  const recieverStyle = "w-full flex justify-start text-left";

  //Check sender and user id
  const myMsg = data.senderId === user._id;

  //When sender and user id are same or not
  const chatStyle = myMsg ? myStyle : recieverStyle;

  //Item positioning
  const item = myMsg ? "items-end" : "items-start";

  //Message shape style
  const shape = myMsg
    ? "rounded-t-lg rounded-bl-lg"
    : "rounded-t-lg rounded-br-lg";

  //Time format
  const formattedTime = extractTime(data.createdAt);
  return (
    <div className={chatStyle}>
      <div className={`flex flex-col ${item}`}>
        <div className={`max-w-fit bg-blue-500 text-white p-4 ${shape}`}>
          {data.message}
        </div>
        <div className="text-gray-400">{formattedTime}</div>
      </div>
    </div>
  );
}

export default MyMessage;
