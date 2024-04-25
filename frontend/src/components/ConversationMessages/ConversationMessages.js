import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import MyMessage from "../MyMessage/MyMessage";

function ConversationMessages() {
  const dispatch = useDispatch();
  const { messages, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.conversationMessages
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [dispatch, isError, isSucces, message]);

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full p-2 border border-blue-500 rounded flex flex-col gap-4 max-h-screen overflow-auto">
      {messages.length > 0 &&
        messages.map((message) => (
          <MyMessage key={message._id} data={message} />
        ))}
      {messages.length === 0 && <p>Send message to start conversation</p>}
    </div>
  );
}

export default ConversationMessages;
