import React, { useEffect, useState } from "react";
import StandardInputField from "../StandardInputField/StandardInputField";
import StandardButton from "../StandardButton/StandardButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversationMessagesById,
  sendMessage,
} from "../../features/conversationMessages/conversationMessagesSlice";
import { toast } from "react-toastify";

function ConversationInputArea({ recieverId }) {
  const [formData, setFormData] = useState({
    user: "",
    id: recieverId,
    message: "",
  });
  const dispatch = useDispatch();

  const { message } = formData;

  const { user } = useSelector((state) => state.auth);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const messageData = { user: user, recieverId: recieverId, message };

    if (messageData.message) {
      dispatch(sendMessage(messageData));
      document.getElementById("message").value = "";
      try {
        dispatch(getConversationMessagesById(recieverId));
      } catch (error) {
        toast.error("Cannot get actuall list of messages.");
      }
    } else {
      toast.error("You can't send empty message.");
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className="form flex justify-center items-center gap-2"
    >
      <StandardInputField
        type={"text"}
        name={"message"}
        id={"message"}
        onChange={onChange}
        value={message}
        placeholder={"Message"}
      />
      <StandardButton text={"Send"} type={"btn"} next={onSubmit} />
    </form>
  );
}

export default ConversationInputArea;
