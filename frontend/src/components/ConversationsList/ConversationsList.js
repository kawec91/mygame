import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessagesById } from "../../features/conversationMessages/conversationMessagesSlice";
import { getConversationsList } from "../../features/conversations/conversationsSlice";
import ConversationsListBar from "../ConversationsListBar/ConversationsListBar";

function ConversationsList() {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversationMenu);
  const options = conversations.conversationsList
    ? conversations.conversationsList
    : [];

  useEffect(() => {
    dispatch(getConversationsList());
  }, [dispatch]);
  return (
    <div className="border-r-[1px] border-r-black p-2 flex flex-col gap-2">
      {options.map((item) => (
        <ConversationsListBar key={item._id} data={item} />
      ))}
    </div>
  );
}

export default ConversationsList;
