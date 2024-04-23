import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ConversationChat({ conversation }) {
  const dispatch = useDispatch();
  const { selectedConvestaion } = useSelector((state) => state.messages);

  useEffect(() => {
    console.log("CC: ", selectedConvestaion);
  }, []);
  return <div>ConversationChat</div>;
}

export default ConversationChat;
