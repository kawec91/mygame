import axios from "axios";

const API_URL = "/api/messages/";

const myUser = JSON.parse(localStorage.getItem("user"));

const authAxios = axios.create({
  baseURL: API_URL,
  headers: { Authorization: "Bearer " + myUser?.token },
});

const getConversationMessagesFromBackend = async (userData) => {
  const respone = await authAxios.get(
    "conversation/" + userData.conversationId
  );

  if (respone.data) {
    return respone.data;
  }

  return respone.data;
};

const sendConversationMessageToBackend = async (userData) => {
  const response = await authAxios.post(
    "send/" + userData.recieverId,
    userData
  );

  if (response.data) {
    return response.data;
  }

  return response.data;
};

const conversationMessageService = {
  getConversationMessagesFromBackend,
  sendConversationMessageToBackend,
};

export default conversationMessageService;
