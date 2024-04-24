import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessagesById } from "../../features/conversationMessages/conversationMessagesSlice";

function ConversationsListBar({ data }) {
  const [choice, setChoice] = useState(false);
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.conversationMenu.selected);
  const clickHandler = () => {
    dispatch(getConversationMessagesById(data._id));
  };

  return (
    <div onClick={clickHandler} className={`p-2`}>
      {data.email} | {data.name}
    </div>
  );
}

export default ConversationsListBar;
