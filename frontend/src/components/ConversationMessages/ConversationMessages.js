import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { resetMessages } from "../../features/conversationMessages/conversationMessagesSlice";
import { toast } from "react-toastify";

function ConversationMessages() {
  const dispatch = useDispatch();
  const { messages, isLoading, isError, message } = useSelector(
    (state) => state.conversationMessages
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(resetMessages());
  }, [dispatch, isError, message]);

  if (isLoading) return <Spinner />;
  return <div>{messages && <div>{JSON.stringify(messages)}</div>}</div>;
}

export default ConversationMessages;
