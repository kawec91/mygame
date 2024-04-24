import axios from "axios";

const API_URL = "/api/messages/";

const getConversationsListFromBackend = async (userData) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: "Bearer " + userData.token },
  });

  if (response.data) {
    return response.data;
  }
  return response.data;
};

const getConversationMessagesFromBackend = async (userData) => {
  const respone = await axios.get(
    API_URL + "conversation/" + userData.selectedConvestaion,
    { headers: { Authorization: "Bearer " + userData.user.token } }
  );

  if (respone.data) {
    return respone.data;
  }

  return respone.data;
};

const messagesService = {
  getConversationsListFromBackend,
  getConversationMessagesFromBackend,
};

export default messagesService;
