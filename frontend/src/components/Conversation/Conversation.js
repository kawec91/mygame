import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedConversation,
  resetConversations,
} from "../../features/messages/messagesSlice";

function Conversation({ conversation }) {
  const dispatch = useDispatch();

  const {
    user,
    conversations,
    selectedConvestaion,
    isLoading,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.messages);

  //TODO:Conversation Bar (Frontend)
  const clickFunction = () => {
    const conId = conversation._id;
    dispatch(setSelectedConversation(conId));
  };

  useEffect(() => {
    dispatch(resetConversations());
  }, [dispatch, selectedConvestaion]);
  return <div onClick={clickFunction}>{conversation.email}</div>;
}

export default Conversation;
