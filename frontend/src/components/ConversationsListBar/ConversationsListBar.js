import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessagesById } from "../../features/conversationMessages/conversationMessagesSlice";

function ConversationsListBar({ data }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.conversationMenu.selected);
  return (
    <div onClick={() => dispatch(getConversationMessagesById(data._id))}>
      {data.email} | {data.name}
    </div>
  );
}

export default ConversationsListBar;
