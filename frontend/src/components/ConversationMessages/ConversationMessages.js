import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import MyMessage from "../MyMessage/MyMessage";

function ConversationMessages() {
  const lastMessageRef = useRef();
  const dispatch = useDispatch();
  const { messages, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.conversationMessages
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dispatch, isError, isSucces, message, messages]);

  if (isLoading) return <Spinner />;
  return (
    <div className="w-full p-2 border border-blue-500 rounded flex flex-col gap-4 h-[80vh] overflow-auto">
      {messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <MyMessage data={message} />
          </div>
        ))}
      {messages.length === 0 && <p>Send message to start conversation</p>}
    </div>
  );
}

export default ConversationMessages;
