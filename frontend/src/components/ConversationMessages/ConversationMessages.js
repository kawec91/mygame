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
  const actUser = localStorage.getItem("user");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSucces) {
      let msgComponentList = [];
      for (let i of messages) {
        if (i._id === actUser.id) {
          msgComponentList.push(<MyMessage key={i._id} data={i} />);
        } else {
          msgComponentList.push(<MyMessageRecive key={i._id} data={i} />);
        }
      }
      setAllMsg(msgComponentList);
    }
    dispatch(resetMessages());
  }, [dispatch, isError, isSucces, message]);

  if (isLoading) return <Spinner />;
  return <>{allMsg}</>;
}

export default ConversationMessages;
