import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessagesById } from "../../features/conversationMessages/conversationMessagesSlice";
import { useSocketContext } from "../../context/SocketContext";

function ConversationsListBar({ data }) {
  const [choice, setChoice] = useState(false);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.conversationMenu.selected);
  const clickHandler = () => {
    dispatch(getConversationMessagesById(data._id));
  };
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(data._id);
  useEffect(() => {
    selected === data._id ? setChoice(true) : setChoice(false);
  }, [selected, data._id]);
  return (
    <div
      className={`p-2 ${
        choice && "bg-yellow-500"
      } flex gap-2 items-center cursor-pointer`}
    >
      <div className={`w-8 h-8 bg-black rounded-full relative `}>
        <div
          className={`w-3 h-3 bg-green-400 absolute bottom-0 right-0 border-2 border-white rounded-full ${
            isOnline ? "block" : "hidden"
          }`}
        ></div>
      </div>
      <div onClick={clickHandler}>
        {data.email} | {data.name}
      </div>
    </div>
  );
}

export default ConversationsListBar;
