import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getConversationMessagesById } from "../../features/conversationMessages/conversationMessagesSlice";
import { getConversationsList } from "../../features/conversations/conversationsSlice";
import ConversationsListBar from "../ConversationsListBar/ConversationsListBar";
import { useSocketContext } from "../../context/SocketContext";

function ConversationsList() {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes();
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversationMenu);
  const options = conversations.conversationsList
    ? conversations.conversationsList
    : [];

  useEffect(() => {
    dispatch(getConversationsList());
  }, [dispatch]);
  return (
    <div className="border-r-[1px] border-r-black flex flex-col p-2 gap-2 min-w-fit">
      <div>TODO Searchbar</div>
      <hr />
      <div className="flex flex-col gap-2 ">
        {options.map((item) => (
          <ConversationsListBar key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ConversationsList;
