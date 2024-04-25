import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { resetMessages } from "../../features/conversationMessages/conversationMessagesSlice";
import { toast } from "react-toastify";
import MyMessage from "../MyMessage/MyMessage";
import MyMessageRecive from "../MyMessageRecive/MyMessageRecive";

function ConversationMessages() {
  const [allMsg, setAllMsg] = useState([]);
  const dispatch = useDispatch();
  const { messages, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.conversationMessages
  );
  const actUser = JSON.parse(localStorage.getItem("user"));
  // const allMessages = useSelector(() => store.getState().userNameReducer.name);

  const createMessagesComponentList = () => {
    let msgComponentList = [];
    for (let i of messages) {
      if (i.senderId === actUser._id) {
        msgComponentList.push(<MyMessage key={i._id} data={i} />);
      } else {
        msgComponentList.push(<MyMessageRecive key={i._id} data={i} />);
      }
    }
    setAllMsg(msgComponentList);
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSucces) {
      createMessagesComponentList();
    }

    //dispatch(resetMessages());
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
